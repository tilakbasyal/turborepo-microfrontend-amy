import React from "react";
import {
  EllipsisOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        Edit
      </a>
    ),
    icon: <EditOutlined />,
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="https://www.aliyun.com"
      >
        Delete
      </a>
    ),
    icon: <DeleteOutlined />,
  },
];

const SimpleDropdown: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <EllipsisOutlined style={{ fontSize: 24 }} />
      </Space>
    </a>
  </Dropdown>
);

export default SimpleDropdown;
