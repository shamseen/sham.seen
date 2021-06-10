import { DesktopSidebar, MobileSidebar, SidebarContent } from './views/sidebar/';
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Pages from './views';
import { Layout } from "antd";
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
            <Header>
                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/background">Background</NavLink>
                </nav>
            </Header>

            {/* -- Rest of site, nested under navbar -- */}
            <Layout id="content-container">
                <MobileViewContext.Provider value={{
                    showDrawer: showMobileSidebar,
                    setDrawer: setShowSidebar,
                    mobileView,
                    sidebarContent: <SidebarContent />
                }}>
                    {/* -- Sidebar  -- */}
                    {mobileView ? <MobileSidebar /> : <DesktopSidebar setMobile={setMobile} />}

                    {/* -- Main content, nested under sidebar-- */}
                    <Layout id="content">

                        {/* -- Body / Pages -- */}
                        <Content id="body-container">
                            <Switch>
                                <Route exact path="/" render={() =>
                                    <Pages.Body page={<Pages.Home />} />}
                                />
                                <Route exact path="/Background" render={() =>
                                    <Pages.Body page={<Pages.Background />} />}
                                />
                                <Route exact path="/Portfolio" render={() =>
                                    <Pages.Body page={<Pages.Portfolio />} />}
                                />
                            </Switch>
                        </Content>

                        {/* -- Footer, nested under sidebar-- */}
                        <Footer>Nunc eu pharetra metus. Vivamus semper aliquam eros, eget vestibulum nisi consequat ac.</Footer>

                    </Layout>

                </MobileViewContext.Provider>
            </Layout>
        </Layout>
    )
}