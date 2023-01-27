import React from "react";
import { Row, Col, Card, Button } from "antd";

const WelcomePage = () => {
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Card title="Welcome to Some Company CMS dashboard">
          <Row>
            <Col span={6}>smallcard</Col>
            <Col span={18}> large chart</Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default WelcomePage;
