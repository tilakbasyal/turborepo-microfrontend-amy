import React from "react";
import { Card, Typography, Progress, Space } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

type TPropsType = {
  label: string;
};

const StatsWithProgressBar: React.FC<TPropsType> = ({ label }) => (
  <Card bordered={false} bodyStyle={{ padding: 8, borderRadius: 8 }}>
    <Space size="large">
      <Card
        style={{
          background: "#f5cdca",
          borderRadius: 12,
          padding: "24px 12px",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Space>
          <CaretUpOutlined />
          <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
            52%
          </Typography.Title>
        </Space>
      </Card>
      <div>
        {label}
        <Progress percent={50} status="exception" showInfo={false} />
      </div>
    </Space>
  </Card>
);

export default StatsWithProgressBar;
