import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Image } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { NavigateFunction, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

interface ILayoutProps {
  menuItems: MenuProps["items"];
  logo?: string; //path to logo
  children: React.ReactNode;
  header: React.ReactNode;
}

const handleMenuItemClick: (
  navigate: NavigateFunction
) => MenuClickEventHandler =
  (navigate) =>
  ({ key }) => {
    navigate(key);
  };

const AmyLayout: React.FC<ILayoutProps> = ({ menuItems, children, header }) => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick = handleMenuItemClick(navigate);

  console.count("why two times rendering???");

  return (
    <Layout hasSider>
      <Sider
        collapsible
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          textAlign: "center",
        }}
      >
        <Image
          src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
          width={100}
          height={100}
          preview={false}
          alt="Organization logo"
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          items={menuItems}
          onClick={onClick}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {header}
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export { AmyLayout };
