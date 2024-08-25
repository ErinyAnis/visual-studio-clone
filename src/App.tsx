import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div className="container my-5">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
}

export default App;
