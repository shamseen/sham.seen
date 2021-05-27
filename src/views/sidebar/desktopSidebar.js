
import { Layout } from 'antd';

export default function DesktopSidebar({ content, setMobile }) {

  return (
    <Layout.Sider
      theme="light"
      width='375px'
      collapsible={true}
      collapsedWidth="0"
      breakpoint="lg" // antd breakpoint 992px
      onBreakpoint={isMobile => setMobile(isMobile)}
    >
      {content}

    </Layout.Sider>
  )
}