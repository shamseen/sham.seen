import { useContext } from 'react';
import { MobileViewContext } from "../../main";
import { Layout } from 'antd';

export default function DesktopSidebar({ setMobile }) {
  const { sidebarContent } = useContext(MobileViewContext);

  return (
    <Layout.Sider
      theme="light"
      width='375px'
      collapsible={true}
      collapsedWidth="0"
      breakpoint="lg" // antd breakpoint 992px
      onBreakpoint={isMobile => setMobile(isMobile)}
    >
      {sidebarContent}

    </Layout.Sider>
  )
}