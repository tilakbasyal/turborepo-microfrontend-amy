import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Image } from "antd";

const { Header, Content, Footer, Sider } = Layout;

interface ILayoutProps {
  menuItems: MenuProps["items"];
  logo?: string; //path to logo
  children: React.ReactNode;
}

const AmyLayout: React.FC<ILayoutProps> = ({ menuItems, children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
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
