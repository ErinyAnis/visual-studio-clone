import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import ButtomArrowIcon from "./SVG/ButtomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFileAction, setOpenedFilesAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  // state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // handelers
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    dispatch(
      setClickedFileAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
    if(exists){
      return;
    }
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
    
  };

  return (
    <div className="ml-1 md:ml-2 mt-2">
      <div className="flex items-center mb-2 gap-1 cursor-pointer">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center gap-1">
            {isOpen ? <ButtomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span>{name}</span>
          </div>
        ) : (
          <span className="flex items-center gap-1" onClick={onFileClicked}>
            <RenderFileIcon fileName={name} />
            <span>{name}</span>
          </span>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
