import Content from "./components/Content";

import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
