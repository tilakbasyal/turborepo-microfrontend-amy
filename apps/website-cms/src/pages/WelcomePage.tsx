import React from "react";
import { Row, Col, Card, Button } from "antd";

const WelcomePage = () => {
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Card title="Welcome to Some Company CMS dashboard"></Card>
      </Col>
    </Row>
  );
};

export default WelcomePage;
