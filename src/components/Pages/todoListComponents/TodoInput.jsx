import React from "react";
import { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { TodoReducers } from "../../Context/TodoReducers";
export default function TodoInput() {
  const [inputData, setInputData] = useState("");
  const { disspatchTodos } = useContext(TodoReducers);
  function handleClick() {
    if (inputData === "") {
      alert(" complite the form ");
    } else {
      disspatchTodos({
        type: "add",
        payload: { name: inputData, id: uuid(), isComplite: false },
      });
      setInputData("");
    }
  }
  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}
