import React, { createContext, useState } from 'react';
import Body from "./views/body";
import SidebarContent from './views/sidebarContent';
import { Layout } from "antd";
import 'antd/dist/antd.css';
import "./styles/main.scss";
import MobileSidebar from './views/sidebar/mobileSidebar';

const { Sider, Content } = Layout;

export const MobileViewContext = React.createContext();

export default function Main() {
    const defaultWidth = '375px';
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setWidth] = useState(defaultWidth);
    const [mobileView, setMobile] = useState(false);
    const [showDrawer, setDrawer] = useState(true);
    const [container, setContainer] = useState(null);

    const showFullSidebar = (isSmallScreen) => {
        console.log("breakpt. small screen: ", isSmallScreen);

        // on mobile, sidebar should be full width
        setMobile(isSmallScreen);
        setCollapsed(!isSmallScreen);
        setWidth(isSmallScreen ? '80%' : defaultWidth);
    }
    return (
        <Layout id="layout">

            {/* ---- Quick overview of my skills ---- */}
            {/* TODO: responsive */}
            {/* <Sider
                theme="light"
                width={siderWidth}
                collapsible={true}
                collapsed={collapsed}
                collapsedWidth="0"
                breakpoint="sm"
                onBreakpoint={isSmallScreen => { showFullSidebar(isSmallScreen) }}
                onCollapse={(wasCollapsed, type) => {
                    setCollapsed(wasCollapsed);
                    console.log(wasCollapsed, type);
                }}
            >
                <SidebarContent />
            </Sider> */}

            <Layout id="content-container">
                <Content >
                    <MobileViewContext.Provider value={{
                        showDrawer, setDrawer, mobileView
                    }}>
                        <MobileSidebar />
                        <Body />
                    </MobileViewContext.Provider>
                </Content>
            </Layout>
        </Layout >
    )
}