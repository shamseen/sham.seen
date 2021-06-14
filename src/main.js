import { SlateHostDS, Pages, Sidebar } from './module';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Spin } from "antd";
const { Content, Header, Footer } = Layout;

import 'antd/dist/antd.css';
import "./styles/main.scss";

export const MobileViewContext = React.createContext();

export default function Main() {
  const [mobileView, setMobile] = useState(false);
  const [showMobileSidebar, setShowSidebar] = useState(true);
  const [cloudFiles, setFiles] = useState({});

  const getFiles = async () => {
    const json = await SlateHostDS.getFiles();
    setFiles(json);

  }

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <Layout id="layout">
      {/* -- Navbar -- */}
      <Header>
        <nav>
          <Pages.Navbar />
        </nav>
      </Header>

      {/* -- Rest of site, nested under navbar -- */}
      <Layout id="content-container">
        <MobileViewContext.Provider value={{
          showDrawer: showMobileSidebar,
          setDrawer: setShowSidebar,
          mobileView,
          sidebarContent: <Sidebar.Content images={cloudFiles.sidebar} resume={cloudFiles.resume} />
        }}>
          {/* -- Sidebar  -- */}
          {mobileView ? <Sidebar.Mobile />
            // so desktop knows went to peace out
            : <Sidebar.Desktop setMobile={setMobile} />
          }

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
                  <Pages.Body page={<Pages.Portfolio projects={cloudFiles.projects} />} />}
                />
              </Switch>
            </Content>

            {/* -- Footer, nested under sidebar-- */}
            <Footer>
              React {'\u2022'} SCSS {'\u2022'} Ant Design {'\u2022'}
              <a href="https://github.com/shamseen/sham.seen/" target="_blank">
                <span> {'<Source Code>'}</span>
              </a>
            </Footer>

          </Layout>
        </MobileViewContext.Provider>
      </Layout>
    </Layout>
  )
}