import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesbar from "./OpenedFileBar";
import { RootState } from "../app/store";

const Preview = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector(({ tree }: RootState) => tree);

  return (
    <>
      <div className="container overflow-y-auto">
        <OpenedFilesbar />
      </div>
      <div className="p-0 md:p-2">
        <FileSyntaxHighlighter content={String(fileContent)} />
      </div>
    </>
  );
};

export default Preview;
