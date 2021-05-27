import React, { useState } from 'react';
import Body from "./views/body";
import Sidebar from './views/sidebar';
import { Button, Layout } from "antd";
import 'antd/dist/antd.css';
import "./styles/main.scss";

const { Sider, Content } = Layout;


export default function Main() {
    const defaultWidth = '250px';
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setWidth] = useState(defaultWidth);

    const showFullSidebar = (isSmallScreen) => {
        console.log("breakpt. small screen: ", isSmallScreen);

        // on mobile, sidebar should be full width
        setCollapsed(!isSmallScreen);
        setWidth(isSmallScreen ? '80%' : defaultWidth);
    }
    return (
        <Layout id="layout">

            {/* ---- Quick overview of my skills ---- */}
            {/* TODO: responsive */}
            <Sider
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
                <Sidebar />
            </Sider>

            <Layout id="content-container">
                <Content >
                    <Body />
                </Content>
            </Layout>
        </Layout >
    )
}