import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFileBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
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

  return (
    <div
      className={`flex items-center px-2 py-1 border-b-2 ${
        file.id === activeTabId ? "border-[#D3D3D3]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-1 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileBarTab;
