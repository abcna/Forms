import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default function Inputs({ inputs }) {
  return (
    <Form.Item
      name={inputs.name}
      rules={[
        {
          required: true,
          message: "Please input your Username!",
        },
      ]}
    >
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder={inputs.placeHolder}
      />
    </Form.Item>
  );
}
