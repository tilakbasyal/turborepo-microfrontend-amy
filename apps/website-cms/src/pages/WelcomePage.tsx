import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import Line from "../components/TinyLine";
import SpacedStats from "../components/SpacedStats";
import ColumnChart from "../components/ColumnChart";
import BasicSelect from "../components/BasicSelect";
import ActionTabs from "../components/Tabs";
import StatsWithProgressBar from "../components/StatisticWithProgressBar";
// import { useMst } from "../models/Root";

const WelcomePage = () => {
  // const { navMenus } = useMst();
  // console.log({ navMenus });
  return (
    <Row>
      <Col span={24}>
        <Card title="Welcome to Some Company CMS dashboard">
          <Row gutter={[40, 40]}>
            <Col span={7}>
              <Card
                title="Total Page Visits"
                style={{
                  height: 290,
                  background:
                    "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
                extra={<BasicSelect />}
              >
                <Statistic value={1145} valueStyle={{ color: "#3f8600" }} />
                <Line />
                <SpacedStats />
              </Card>
            </Col>
            <Col span={17}>
              <Card
                type="inner"
                title="Active users over the time period"
                extra={<BasicSelect />}
              >
                <ColumnChart />
              </Card>
            </Col>
          </Row>

          <Row gutter={[48, 24]} style={{ paddingTop: 24 }}>
            <Col span={16}>
              <ActionTabs />
            </Col>
            <Col span={8} style={{ marginTop: 32 }}>
              <Row gutter={[24, 24]}>
                <Col span={24}>
                  <StatsWithProgressBar label="New Visits today / 100" />
                </Col>
                <Col span={24}>
                  <StatsWithProgressBar label="Blogs written / week" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default WelcomePage;
