import React, { useState } from "react";
import "./style.css";

import TodoAdder from "./components/TodoAdder";
import TodoWrapper from "./components/TodoWrapper";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <TodoAdder addTodoCallback={addTodo} />
      <TodoWrapper todos={todos} />
    </div>
  );
}
