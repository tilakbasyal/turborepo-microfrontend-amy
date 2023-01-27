import React from "react";
import { Row, Col, Space, Avatar, Badge, Input } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <Row justify="end" style={{ padding: "0 24px" }}>
      <Col flex="100px"></Col>
      <Col
      // flex="auto"
      >
        <Space size="large">
          <Input
            size="middle"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
          <Badge count={5} size="small">
            <BellOutlined style={{ fontSize: 24, verticalAlign: "middle" }} />
          </Badge>
          <Avatar src="https://randomuser.me/api/portraits/women/75.jpg" />
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
