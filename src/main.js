import React, { useState } from 'react';
import Body from "./views/body";
import Sidebar from './views/sidebar';
import { Button, Layout } from "antd";
import 'antd/dist/antd.css';
import "./styles/main.scss";

const { Sider, Content } = Layout;


export default function Main() {

    const [open, setOpen] = useState(true);

    return (
        <Layout id="layout">

            {/* ---- Quick overview of my skills ---- */}
            {/* TODO: responsive */}
            <Sider
                width="30%"
                theme="light"
                collapsible={true}
                collapsed={!open}
                collapsedWidth="0"
                // breakpoint="sm"
                // onBreakpoint={broken => {
                //     console.log("broken: ", broken);
                // }}
                onCollapse={(collapsed, type) => {
                    setOpen(!collapsed);
                }}
                className="gray-bg" >
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