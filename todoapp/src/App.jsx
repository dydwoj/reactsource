import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoTemplate>Todo App</TodoTemplate>
    </>
  );
}

export default App;
