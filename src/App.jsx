import { useState } from "react";
import icon from "./icon.png";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setOpen(!open)}>
        {open ? "Back Modal" : "Open Modal"}
      </button>
      <div className={`modal ${open ? "show" : ""}`}>
        <img src={icon} />
      </div>
    </div>
  );
}

export default App;
