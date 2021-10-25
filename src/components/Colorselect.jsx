import React, { useContext } from "react";
import { Select } from "antd";
import {
  Menu,
  Dropdown,
  Button,
  message,
  Space,
  Tooltip,
  Row,
  Col,
} from "antd";
import frFR from "antd/lib/locale/fr_FR";
import en_US from "antd/lib/locale/en_US";
import fa_IR from "antd/lib/locale/fa_IR";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { ThemeContext } from "./Context/ThemeContext";
import { FormContext } from "./Context/FormContext";
import List from "./Pages/List";
import Login from "./Pages/Login";
import Registery from "./Pages/Registery";
import { LanguageContext } from "./Context/LanguageContext";
import TodoList from "./Pages/TodoList";
export default function Colorselect() {
  const { setTheme } = useContext(ThemeContext);
  const { setForm } = useContext(FormContext);
  const { setLanguage } = useContext(LanguageContext);
  const { Option } = Select;

  function onChange(value) {
    switch (value) {
      case "box1":
        setTheme(value);
      case "box":
        setTheme(value);
      case "boxgreen":
        setTheme(value);
      case "backgroundC":
        setTheme(value);
      case "backgroundC2":
        setTheme(value);

        break;

      default:
        break;
    }
  }
  function onChange3(value) {
    switch (value) {
      case "login":
        return setForm(<Login />);
      case "list":
        return setForm(<List />);
      case "todoList":
        return setForm(<TodoList />);
      case "registery":
        setForm(<Registery />);

      default:
        break;
    }
  }
  function onChange2(value) {
    switch (value) {
      case "frFR":
        return setLanguage(frFR);
      case "en_US":
        return setLanguage(en_US);
      case "fa_IR":
        setLanguage(fa_IR);
      default:
        break;
    }
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Row>
      <Col>
        <Select
          showSearch
          style={{ width: 150 }}
          placeholder="Select a Color"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="boxgreen">green</Option>
          <Option value="box1">blue</Option>
          <Option value="box">grey</Option>
          <Option value="backgroundC">custom</Option>
          <Option value="backgroundC2">custom sport</Option>
        </Select>
      </Col>
      <Col>
        <Select
          showSearch
          style={{ width: 150, marginLeft: 50 }}
          placeholder="Select Language"
          optionFilterProp="children"
          onChange={onChange2}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="fa_IR">Persian</Option>
          <Option value="en_US">English</Option>
          <Option value="frFR">French</Option>
        </Select>
      </Col>
      <Col>
        <Select
          showSearch
          style={{ width: 150, marginLeft: 50 }}
          placeholder="Select Form kind"
          optionFilterProp="children"
          onChange={onChange3}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="registery">Registery</Option>
          <Option value="login">Login</Option>
          <Option value="list">phonebook</Option>
          <Option value="todoList">todoList</Option>
        </Select>
      </Col>
    </Row>
  );
}
