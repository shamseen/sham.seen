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
            <Sider trigger={null} collapsible collapsed={open}>
                <SkillSnapshot />
            </Sider>
            {/* Toggle sider */}
            <Button
                icon={<IdcardFilled />}
                onClick={() => { setOpen(!open) }}>
            </Button>

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
        </Layout>
    )
}