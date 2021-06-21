import { SlateHostDS, Pages, Sidebar } from './module';
import React, { useEffect, useState } from 'react';
import { Layout } from "antd";
const { Content, Header, Footer } = Layout;

import 'antd/dist/antd.css';
import "./styles/main.scss";

export const MobileViewContext = React.createContext();

export default function Main() {
  const [mobileView, setMobile] = useState(false);
  const [showMobileSidebar, setShowSidebar] = useState(true);
  const [cloudFiles, setFiles] = useState({
    projects: [],
    sidebar: [],
    resume: {}
  });

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
          sidebarContent: <Sidebar.Content
            images={cloudFiles.sidebar}
            resume={cloudFiles.resume}
          />
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
              <Pages.Body projects={cloudFiles.projects} />
            </Content>

            {/* sticky footer bc it doesn't like showing up in body >:( */}
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