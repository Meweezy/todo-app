import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./App.css";
import Todo from "./Todo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [scaleIn, setScaleIn] = useState(false);
  const [docData, setDocData] = useState([]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setDocData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
      setTodos(snapshot.docs.map((doc) => doc.data().title));
      setScaleIn(true);
    });
  }, []);

  // console.log(docData[0]);

  const deleteTodo = (e) => {
    e.preventDefault();
    let index = e.target.value;
    // db.collection("todos")
    // .where("title", "==", todos[index])
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach(function (doc) {
    //       // console.log(doc);
    //       db.collection("todos").doc(doc.id).delete();
    //     });
    //   });
    // console.log(docData[index].id);
    db.collection("todos").doc(docData[index].id).delete();
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log("BOOM >", input);

    //add what is in iput to the todos array
    //clear the input field
    db.collection("todos").add({
      title: input,
    });
    setInput("");
    // setScaleIn(true);
    console.log(scaleIn);

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
      <TransitionGroup>
        <div className="todo-wrapper">
          {todos.map((todo, index) => (
            <CSSTransition
              in={scaleIn}
              timeout={300}
              classNames="scaleIn"
              // key={uuidv4()}
              unmountOnExit
              // onEnter={() => setScaleIn(true)}
              // onEntered={() => setScaleIn(true)}
              // onExit={() => setScaleIn(false)}
              // onExiting={() => setScaleIn(false)}
              // onExited={() => setScaleIn(false)}
            >
              <Todo
                title={todo}
                value={index}
                key={uuidv4()}
                deleteTodo={deleteTodo}
              ></Todo>
            </CSSTransition>
          ))}
        </div>
      </TransitionGroup>
    </div>
  );
}

export default App;
