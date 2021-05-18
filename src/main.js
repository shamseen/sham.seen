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
        <Layout id="layout">

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
                className="gray-bg" >
                <SkillSnapshot />
            </Sider>

            <Content className="content">
                {/* TODO: Jumbotron, cards, FAB, etc */}
                Content
            </Content>
        </Layout >
    )
}