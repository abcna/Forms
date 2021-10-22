import React from "react";
import TodoCheckList from "./todoListComponents/TodoCheckList";
import TodoInput from "./todoListComponents/TodoInput";
import { useContext } from "react";
import { TodoReducers } from "../Context/TodoReducers";
import { Row, Col } from "antd";
export default function TodoList() {
  const { todos } = useContext(TodoReducers);
  return (
    <Row justify="space-around" align="middle">
      <Col >
        <div className="page-content page-container" id="page-content">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <TodoInput />
                  {todos.map((todo) => {
                    return <TodoCheckList todo={todo} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
