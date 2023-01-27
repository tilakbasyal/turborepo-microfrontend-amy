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
        <Typography.Text
          style={{
            fontWeight: 600,
            fontSize: 12,
            color: "rgba(108, 64, 64, 0.88)",
          }}
        >
          {deviceType}
        </Typography.Text>
      </Col>

      <Col span={24}>
        <Typography.Text
          style={{
            fontWeight: 600,
            fontSize: 18,
            color: "rgba(108, 64, 64, 0.88)",
          }}
        >
          {percentage}%
        </Typography.Text>
      </Col>
    </Row>
  );
};

const SpacedStats = () => {
  return (
    <Space align="center" size="large">
      <TitleAndNumber deviceType="Mobile" percentage={72} />
      <Divider
        type="vertical"
        style={{
          height: "2.5rem",
          width: "4px",
          borderRadius: 4,
          backgroundColor: "#5f569b",
        }}
      />
      <TitleAndNumber deviceType="Desktop" percentage={11} />
      <Divider
        type="vertical"
        style={{
          height: "2.5rem",
          width: "4px",
          borderRadius: 4,
          backgroundColor: "#5f569b",
        }}
      />

      <TitleAndNumber deviceType="Others" percentage={17} />
    </Space>
  );
};

export default SpacedStats;
