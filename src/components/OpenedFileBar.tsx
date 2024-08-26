import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

// interface IProps {

// }

const OpenedFilesbar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center gap-3 border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFileBarTab key={file.id} file={file} />
        ))}
      </div>
      <div className="p-0 md:p-2">
      <FileSyntaxHighlighter
        content={String(clickedFile.fileContent || "")}
      />
      </div>
    </div>
  );
};

export default OpenedFilesbar;
