import React from "react";
import { Tag } from "antd";

type TTagCountProps = {
  count: number;
  icon: React.ReactNode;
  color: string;
};

const TagCount: React.FC<TTagCountProps> = ({ count, icon, color }) => (
  <Tag icon={icon} color={color}>
    {count}
  </Tag>
);

export default TagCount;
