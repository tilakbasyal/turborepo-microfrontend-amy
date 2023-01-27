import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import Line from "../components/TinyLine";
import SpacedStats from "../components/SpacedStats";

const WelcomePage = () => {
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Card title="Welcome to Some Company CMS dashboard">
          <Row>
            <Col span={6}>
              <Card
                style={{
                  background:
                    "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
              >
                <Statistic
                  title="Total Page Visits"
                  value={1145}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                />
                <Line />
                <SpacedStats />
              </Card>
            </Col>
            <Col span={18}> large chart</Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default WelcomePage;
