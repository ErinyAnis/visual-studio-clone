import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenedFilesAction,
  setTabIdToRemoveAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);

  //handlers
  const { id, name, content } = file;
  const onClick = () => {
    dispatch(
      setClickedFileAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };

  const onRemove = (selectedID: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedID);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileAction({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };

  return (
    <div
      className={`cursor-pointer flex items-center px-2 py-1 border-b-2 ${
        file.id === activeTabId ? "border-[#D3D3D3]" : "border-transparent"
      }`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemoveAction(file.id))
      }}
      
    >
      <RenderFileIcon fileName={file.name} />
      <span className="duration-300 flex justify-center items-center w-fit mx-1 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
