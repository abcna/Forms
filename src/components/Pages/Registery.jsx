import React, { useContext, useLayoutEffect, useRef } from "react";
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export default function Registery() {
  const { Option } = Select;
  const inputRef = useRef();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="98">+98 IR</Option>
        <Option value="47">+47</Option>
        <Option value="01">+01</Option>
        <Option value="00">+00</Option>
        <Option value="99">+99</Option>
        <Option value="46">+46</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const { theme } = useContext(ThemeContext);
  return (
    <Row justify="center">
      <Col>
        <Form
          className={theme}
          style={{
            maxWidth: 600,
            marginTop: 100,
            marginBottom: 50,
            padding: 100,
          }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <p
            className={`red ${theme} `}
            style={{
              paddingLeft: 50,
              marginBottom: 40,
              fontWeight: 900,
              fontSize: 20,
            }}
          >
            {" "}
            Complite your information{" "}
          </p>
          <Form.Item
            className="red"
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input ref={inputRef} style={{ borderRadius: 6 }} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password style={{ borderRadius: 6 }} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password style={{ borderRadius: 6 }} />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input style={{ borderRadius: 6 }} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              style={{ borderRadius: 6 }}
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true, message: "Please input website!" }]}
          >
            <AutoComplete
              options={websiteOptions}
              onChange={onWebsiteChange}
              placeholder="website"
            >
              <Input style={{ borderRadius: 6 }} />
            </AutoComplete>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
