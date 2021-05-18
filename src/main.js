import React, { useState } from 'react';
import SkillSnapshot from './components/skillSnapshot';
import { Button, Layout } from "antd";
import {
    IdcardFilled
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./styles/main.scss";

const { Sider, Content } = Layout;


export default function Main() {

    const [open, setOpen] = useState(true);

    return (
        <Layout>

            {/* ---- Quick overview of my skills ---- */}
            {/* TODO: responsive */}
            <Sider
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
                    console.log("collapsed: ", collapsed, type);
                }}
                className="" >
                <SkillSnapshot />
            </Sider>

            <Content
                className="site-layout-background content"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}>
                {/* TODO: Jumbotron, cards, FAB, etc */}
                Content
            </Content>
        </Layout >
    )
}