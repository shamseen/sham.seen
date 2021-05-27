import { DesktopSidebar, MobileSidebar, SidebarContent } from './views/sidebar/';
import React, { useState } from 'react';
import Body from "./views/body";
import { Layout } from "antd";
import 'antd/dist/antd.css';
import "./styles/main.scss";

export const MobileViewContext = React.createContext();

export default function Main() {
    const [mobileView, setMobile] = useState(false);
    const [showMobileSidebar, setShowSidebar] = useState(true);

    return (
        <Layout id="layout">
            <MobileViewContext.Provider value={{
                showDrawer: showMobileSidebar,
                setDrawer: setShowSidebar,
                mobileView,
                sidebarContent: <SidebarContent />
            }}>

                {/* ---- Quick overview of my skills ---- */}
                {mobileView ? <MobileSidebar /> : <DesktopSidebar setMobile={setMobile} />}

                {/* container scales body content with desktop sidebar */}
                <Layout id="content-container">
                    <Layout.Content>
                        <Body />
                    </Layout.Content>
                </Layout>
            </MobileViewContext.Provider>
        </Layout>
    )
}