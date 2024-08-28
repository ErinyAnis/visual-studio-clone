import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFilesBarTab";


const OpenedFilesbar = () => {
  const { openedFiles } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center gap-3 border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      
    </div>
  );
};

export default OpenedFilesbar;
