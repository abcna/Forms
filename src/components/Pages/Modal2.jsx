import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Modal2({ data, setData }) {
  const Demo = () => {
    const onFinish = (values) => {
      console.log("Received values of form:", values);
    };
  };
  const [userData, setUserData] = useState("");
  function handleSubmit() {
    setData([
      {
        key: "1",
        firstName: 'Not Available',
        lastName: "'Not Available'",
        age: 'Not Available',
        address: "'Not Available'",
        tags: ["'Not Available'"],
      },
    ]);
  }

  return (
    <Form name="dynamic_form_nest_item" autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{ display: "flex", marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "first"]}
                  fieldKey={[fieldKey, "first"]}
                  value={userData}
                  onChange={
                    ((e) => setUserData(e.target.value), console.log(userData))
                  }
                  rules={[{ required: true, message: "Missing first name" }]}
                >
                  <input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "last"]}
                  fieldKey={[fieldKey, "last"]}
                  rules={[{ required: true, message: "Missing last name" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "age"]}
                  fieldKey={[fieldKey, "age"]}
                  rules={[{ required: true, message: "Missing age" }]}
                >
                  <Input placeholder="age" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "Address"]}
                  fieldKey={[fieldKey, "Address"]}
                  rules={[{ required: true, message: "Missing Address " }]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
