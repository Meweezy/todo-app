import React, { useState } from "react";
import "./Todo.css";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = (props) => {
  return (
    <div className="todo">
      <div className="todo-span">
        <span data-id={props.id}>{props.title}</span>
      </div>

      <button
        value={props.value}
        onClick={props.deleteTodo}
        className="deleteBtn"
      >
        {/* <FontAwesomeIcon className="deleteIcon" icon={faTrashAlt} /> */}
      </button>
    </div>
  );
};

export default Todo; //let this be reusable
