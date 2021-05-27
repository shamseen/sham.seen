import React, { useState } from 'react';
import Body from "./views/body";
import SidebarContent from './views/sidebarContent';
import { Layout } from "antd";
import 'antd/dist/antd.css';
import "./styles/main.scss";
import MobileSidebar from './views/sidebar/mobileSidebar';
import DesktopSidebar from "./views/sidebar/desktopSidebar";

const { Sider, Content } = Layout;

export const MobileViewContext = React.createContext();

export default function Main() {
    const [mobileView, setMobile] = useState(false);
    const [showMobileSidebar, setShowSidebar] = useState(true);

    const showFullSidebar = (isMobile) => {
        console.log("breakpt. small screen: ", isMobile);
        // on mobile, sidebar should be full width
        setMobile(isMobile);
    }

    return (
        <Layout id="layout">

            {/* ---- Quick overview of my skills ---- */}

            {/* Show  */}
            { mobileView ? null : <DesktopSidebar content={<SidebarContent />} setMobile={setMobile} />}

            <Layout id="content-container">
                <Content >
                    <MobileViewContext.Provider value={{
                        showDrawer: showMobileSidebar,
                        setDrawer: setShowSidebar,
                        mobileView
                    }}>

                        <Body />

                        {/* Mobile sidebar, if on mobile if on mobile */}
                        {mobileView ? <MobileSidebar /> : null}

                    </MobileViewContext.Provider>
                </Content>
            </Layout>
        </Layout >
    )
}