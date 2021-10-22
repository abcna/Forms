import { createContext } from "react";
import { useReducer } from "react";

import { v4 as uuid } from "uuid";

export const TodoReducers = createContext();

const initialTodo = [
  { name: "buy car", id: uuid(), isComplite: false },
  { name: "do wash", id: uuid(), isComplite: true },
  { name: "buy hat", id: uuid(), isComplite: false },
];

export function TodoProvider({ children }) {
  const [todos, disspatchTodos] = useReducer(reducer, initialTodo);

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return [action.payload, ...state];
      case "checkStatus":
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, isComplite: !action.payload.isComplite };
          } else return item;
        });
      case "delete": {
        return state.filter((item) => {
          if (action.payload.id !== item.id) {
            return { ...item };
          }
        });
      }
      default:
        state;
    }
  }

  return (
    <TodoReducers.Provider value={{ todos, disspatchTodos }}>
      {children}{" "}
    </TodoReducers.Provider>
  );
}
