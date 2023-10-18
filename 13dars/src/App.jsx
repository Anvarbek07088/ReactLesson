import { Button, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  // const [todos,setTodos]=useState([])
  // const [currentTodo, setCurrentTodo]=useState(null)
  const [toogleColorMode, colormode] = useColorMode();
  // const getTodos=async ()=>{
  //   const data =await useHttp.get('todos')
  // }
  return (
    <>
      <Button onClick={toogleColorMode}>
        {colormode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
}

export default App;
