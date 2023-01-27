import React from "react";
import { Space, Row, Col, Typography, Divider } from "antd";

type TStatsProps = {
  deviceType: string;
  percentage: number;
};

const TitleAndNumber: React.FC<TStatsProps> = ({ deviceType, percentage }) => {
  return (
    <Row>
      <Col span={24}>
        <Typography.Text>{deviceType}</Typography.Text>
      </Col>

      <Col span={24}>
        <Typography.Text>{percentage}%</Typography.Text>
      </Col>
    </Row>
  );
};

const SpacedStats = () => {
  return (
    <Space align="center" size="large">
      <TitleAndNumber deviceType="Mobile" percentage={80} />
      <Divider
        type="vertical"
        style={{
          height: "2.5rem",
          width: "4px",
          borderRadius: 4,
          backgroundColor: "#5f569b",
        }}
      />
      <TitleAndNumber deviceType="Mobile" percentage={80} />
      <Divider
        type="vertical"
        style={{
          height: "2.5rem",
          width: "4px",
          borderRadius: 4,
          backgroundColor: "#5f569b",
        }}
      />

      <TitleAndNumber deviceType="Mobile" percentage={80} />
    </Space>
  );
};

export default SpacedStats;
