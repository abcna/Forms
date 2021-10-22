import React, { useContext } from "react";
import { Table, Tag, Space } from "antd";
import { Row, Col, Button, Modal } from "antd";
const { Column, ColumnGroup } = Table;
import { useState } from "react";
import Modal2 from "./Modal2";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

export default function List() {
  const LanguageValue = useContext(LanguageContext);
  const [visible, setVisible] = useState(false);
  const initialData = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const [data, setData] = useState(initialData);

  const { theme } = useContext(ThemeContext);

  return (
    <Row justify="center">
      <Col className={theme} style={{ marginTop: 100 }}>
        <Table dataSource={data}>
          <ColumnGroup style={{ backgroundColor: "black" }} title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
        <Col>
          <Button
            type="primary"
            onClick={() => setVisible(true)}
            style={{ backgroundColor: "#222831", width: 130, marginBottom: 50 }}
            htmlType="submit"
            className="login-form-button"
          >
            Add new person
          </Button>
          <Modal
            title="Modal 1000px width"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={1000}
          >
            <Modal2 setData={setData} data={data} />
          </Modal>
        </Col>
      </Col>
    </Row>
  );
}
