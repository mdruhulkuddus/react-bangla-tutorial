
import { AutoComplete, Button, Layout, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import { Content } from "antd/es/layout/layout";

const { Header, Sider, Footer } = Layout;

const LayoutComponent = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout>
      <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? "dark" : "light"} className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button type="text" className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <span style={{ fontSize: '24px', marginLeft: '40px', fontWeight: "bold" }}>
            <span style={{ color: "#087EA4" }}>React</span><span style={{ color: "#EA4335" }}>JS</span> Bangla Tutorial
          </span>
        </Header>
        <Content style={{
          margin: '24px 16px',
          padding: 24,
          height: 'calc(100vh - 128px)',
          overflowY: 'auto',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}>

          {children}

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React Bangla Tutorial ©{new Date().getFullYear()} Created by <a href="https://github.com/mdruhulkuddus" target="_blank">Ruhul Kuddus</a>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
