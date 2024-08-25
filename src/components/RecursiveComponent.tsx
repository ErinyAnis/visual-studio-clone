import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrowIcon";
import ButtomArrowIcon from "./SVG/ButtomArrowIcon";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  // state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // handelers
  const toggle = ()=>setIsOpen((prev) => !prev);

  return (
    <div className="ml-2">
      <div className="flex items-center mb-2 gap-1 cursor-pointer">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center gap-1">
            {isOpen ? <ButtomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon fileName={name} isFolder={isFolder} isOpen={isOpen} />
            <span>{name}</span>
          </div>
        ) : (
          <span className="flex items-center gap-1">
            <RenderFileIcon fileName={name} />
            <span>{name}</span>
          </span>
        )}


      </div>

      {isOpen &&children &&
        children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
