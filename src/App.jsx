import { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import arrows from "./assets/arrows.svg";

import "./index.css";

function App() {
  const [toggleSidebar, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggleSidebar);
  };

  return (
    <div>
      {toggleSidebar ? null : (
        <div className="mt-5 ml-5">
          <button onClick={handleToggle}>
            <img width={30} src={arrows} />
          </button>
        </div>
      )}
      <div className="flex">
        <Sidebar toggleSidebar={toggleSidebar} handleToggle={handleToggle} />
        <Content toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;
