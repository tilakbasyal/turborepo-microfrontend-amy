import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

enum navMenuItems {
  HOME = "home",
  SERVICES = "services",
  ABOUT = "about",
  GALLERY = "gallery",
  CONTACTS = "contact",
}

export const menuItems: MenuProps["items"] = [
  {
    key: navMenuItems.HOME,
    icon: React.createElement(HomeOutlined),
    label: "Home",
  },
  {
    key: navMenuItems.SERVICES,
    icon: React.createElement(BarChartOutlined),
    label: "Services",
  },
  {
    key: navMenuItems.ABOUT,
    icon: React.createElement(AppstoreOutlined),
    label: "About",
  },
  {
    key: navMenuItems.GALLERY,
    icon: React.createElement(VideoCameraOutlined),
    label: "Gallery",
  },
  {
    key: navMenuItems.CONTACTS,
    icon: React.createElement(ContactsOutlined),
    label: "Contact",
  },
];
