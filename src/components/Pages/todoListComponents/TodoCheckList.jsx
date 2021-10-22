import React from "react";
import { useContext } from "react";
import { TodoReducers } from "../../Context/TodoReducers";
export default function TodoCheckList({ todo }) {
  function handleStatus(id) {
    disspatchTodos({ type: "checkStatus", payload: todo });
  }
  const { disspatchTodos } = useContext(TodoReducers);
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        <li className={todo.isComplite ? "completed" : ""}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.isComplite}
                onClick={handleStatus}
              />
              {todo.name}
              <i className="input-helper"></i>
            </label>
          </div>
          <i
            className="remove mdi mdi-close-circle-outline"
            onClick={() => disspatchTodos({ type: "delete", payload: todo })}
          ></i>
        </li>
      </ul>
    </div>
  );
}
