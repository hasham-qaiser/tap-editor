import { useState } from "react";
import "./App.css";
import TipTap from "./Tiptap";
import Details from "./Details";

function App() {
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <TipTap setDescription={setDescription} />
      <Details description={description} />
    </div>
  );
}

export default App;
