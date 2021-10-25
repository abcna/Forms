import { useState } from "react";
import { useContext } from "react";
import "./App.css";
import { Modal, Row, Col, Button } from "antd";
import Colorselect from "./components/Colorselect";
import { LanguageContext } from "./components/Context/LanguageContext";

import { ThemeContext } from "./components/Context/ThemeContext";
import { FormContext } from "./components/Context/FormContext";

import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";
import TodoList from "./components/Pages/TodoList";

function App() {
  // const inputs = [
  //   {
  //     name: "username",
  //     type: "text",
  //     placeHolder: "User NAME",
  //     rules: [
  //       {
  //         required: true,
  //         message: "Please input your Username!",
  //       },
  //     ],
  //   },
  //   {
  //     name: "password",
  //     type: "text",
  //     placeHolder: "PASSWORD",
  //     rules: [
  //       {
  //         required: true,
  //         message: "Please input your Password!",
  //       },
  //     ],
  //   },
  // ];

  const [isModalVisible, setIsModalVisible] = useState(true);
  const contextlanguage = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTheme("");
  };
  const { form } = useContext(FormContext);
  const { language } = useContext(LanguageContext);
  return (
    <ConfigProvider locale={language}>
      <header>
        <div className="App ">
          <Button
            style={{ width: 200 }}
            type="primary"
            onClick={() => setIsModalVisible(true)}
          >
            Open Dashbord
          </Button>
          <>
            <Modal
              centered
              width={700}
              title="Select your Form and your theme"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Colorselect />
            </Modal>

            {/* <Registery /> */}
            {/* <Login inputs={inputs} /> */}
            {/* <List /> */}
          </>
        </div>
      </header>
      <Row justify="center">
        <Col>
          <footer>{form}</footer>
        </Col>
      </Row>
    </ConfigProvider>
  );
}

export default App;
