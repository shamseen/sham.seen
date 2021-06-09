import { DesktopSidebar, MobileSidebar, SidebarContent } from './views/sidebar/';
import React, { useState } from 'react';
import Body from "./views/body";
import { Layout, Menu } from "antd";
const { Content, Header, Footer } = Layout;

import 'antd/dist/antd.css';
import "./styles/main.scss";

export const MobileViewContext = React.createContext();

export default function Main() {
    const [mobileView, setMobile] = useState(false);
    const [showMobileSidebar, setShowSidebar] = useState(true);

    return (
        <Layout id="layout">

            {/* -- Navbar -- */}
            <Header id="navbar" theme='light' className="header">
                {/* <div className="logo" /> */}
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>

            {/* -- Rest of site, nested under navbar -- */}
            <Layout id="content">
                <MobileViewContext.Provider value={{
                    showDrawer: showMobileSidebar,
                    setDrawer: setShowSidebar,
                    mobileView,
                    sidebarContent: <SidebarContent />
                }}>
                    {/* -- Sidebar  -- */}
                    {mobileView ? <MobileSidebar /> : <DesktopSidebar setMobile={setMobile} />}

                    {/* -- Main content, nested under sidebar-- */}
                    <Layout id="content-container">

                        {/* -- Body -- */}
                        <Content id="body-container">
                            <Body />
                        </Content>

                        {/* -- Footer, nested under sidebar-- */}
                        <Footer>Nunc eu pharetra metus. Vivamus semper aliquam eros, eget vestibulum nisi consequat ac.</Footer>

                    </Layout>

                </MobileViewContext.Provider>
            </Layout>
        </Layout>
    )
}