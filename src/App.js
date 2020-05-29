import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./App.css";
import Todo from "./Todo";
import { CSSTransition } from "react-transition-group";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [scaleIn, setScaleIn] = useState(false);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data()));
      setTodos(snapshot.docs.map((doc) => doc.data().title));
      setScaleIn(true);
    });
  }, []);

  const deleteTodo = (e) => {
    let index = e.target.value;
    db.collection("todos")
      .where("title", "==", todos[index])
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // console.log(doc);
          db.collection("todos").doc(doc.id).delete();
        });
      });
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log("BOOM >", input);

    //add what is in iput to the todos array
    //clear the input field

    // setTodos([...todos, input]);

    db.collection("todos").add({
      title: input,
    });
    setInput("");
    // setScaleIn(true);

    console.log([...todos, input]);
  };

  return (
    <div id="bootstrap-overrides" className="App">
      <h1>Todo App</h1>
      <form className="form-inline">
        <input
          className="form-control todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></input>
        <button
          className="addBtn"
          disabled={!input}
          type="submit"
          onClick={addTodo}
        >
          ADD TODO
        </button>
      </form>

      <CSSTransition
        in={scaleIn}
        timeout={300}
        classNames="scaleIn"
        unmountOnExit
        onEnter={() => setScaleIn(true)}
        onEntered={() => setScaleIn(true)}
        onExit={() => setScaleIn(true)}
        onExited={() => setScaleIn(true)}
      >
        <div className="todo-wrapper">
          {todos.map((todo, index) => (
            <Todo
              title={todo}
              value={index}
              key={index}
              deleteTodo={deleteTodo}
            ></Todo>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
