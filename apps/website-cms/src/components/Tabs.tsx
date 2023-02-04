import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import QuestionsList from "./QuestionsTab";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Blogs",
    children: <QuestionsList />,
  },
  {
    key: "2",
    disabled: true,
    label: `Whatelse`,
    children: `Content of Tab Pane 2`,
  },
];

const ActionTabs: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default ActionTabs;
