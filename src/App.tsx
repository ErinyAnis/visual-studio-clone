import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizeablePanel from "./components/ResizeablePanel";
import { fileTree } from "./data/fileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFiles } = useSelector(({ tree }: RootState) => tree);

  return (
    <div className="flex max-h-screen ">
      <ResizeablePanel
        showLeftPanel
        leftPanel={
          <div className="max-h-screen min-h-screen overflow-x-auto p-2 ">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={openedFiles.length? <Preview /> : <WelcomeTab />}
      />
    </div>
  );
}

export default App;
