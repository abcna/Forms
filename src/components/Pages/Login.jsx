import React, { useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { ThemeContext } from "../Context/ThemeContext";

export default function Login() {
  const NormalLoginForm = () => {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Row justify="center">
        <Col>
          <div>
            {" "}
            <Form
              name="normal_login"
              className="login-form"
              className={theme}
              style={{ maxWidth: 3000, marginTop: 180, padding: 100 , marginBottom: 50 }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  style={{ backgroundColor: "#222831", width: 100 }}
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
