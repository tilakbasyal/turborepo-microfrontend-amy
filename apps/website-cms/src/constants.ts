import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export const menuItems: MenuProps["items"] = [
  { key: "home", icon: React.createElement(HomeOutlined), label: "Home" },
  {
    key: "services",
    icon: React.createElement(BarChartOutlined),
    label: "Services",
  },
  {
    key: "about-us",
    icon: React.createElement(AppstoreOutlined),
    label: "About",
  },
  {
    key: "gallery",
    icon: React.createElement(VideoCameraOutlined),
    label: "Gallery",
  },
  {
    key: "contact",
    icon: React.createElement(ContactsOutlined),
    label: "Contact",
  },
];
