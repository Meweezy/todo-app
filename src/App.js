import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    console.log("BOOM >", input);

    //add what is in iput to the todos array
    //clear the input field

    setTodos([...todos, input]);
    setInput("");

    console.log([...todos, input]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></input>
        <button disabled={!input} type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      {todos.map((todo, i) => (
        <Todo title={todo} key={i}></Todo>
      ))}
    </div>
  );
}

export default App;
