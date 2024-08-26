import OpenedFilesbar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div className="flex max-h-screen overflow-hidden">
      <div className="container bg-[#1b1b1be8] max-h-screen min-h-screen overflow-x-auto min-w-fit  w-60 md:w-80 border-r border-[#6b6b6b] border-b-[1px] p-2">
        <RecursiveComponent fileTree={fileTree} />
      </div>
      <div className="container overflow-y-auto">
        <OpenedFilesbar />
      </div>
    </div>
  );
}

export default App;
