import { useState } from "react";
import { createContext } from "react";
import Components1 from "./components/Components1";

export const MyContext = createContext();
function App() {

  let [isOpen, setIsOpen] = useState(false);
  let [color, setColor] = useState("green");

  const colors = [
    "blue",
    "green",
    "red",
    "rgb(228, 15, 182)",
    "black",
    "darkslategrey",
  ];

  const values = {
    isOpen,
    setIsOpen,
    colors,
    color,
    setColor,
  };
  
  return (
    <MyContext.Provider value={values}>
      <Components1 />
    </MyContext.Provider>
  );
}

export default App;
