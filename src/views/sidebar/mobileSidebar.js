import { useState } from 'react';
import { Affix, Button, Drawer } from 'antd';
import SidebarContent from '../sidebarContent';
import "../../styles/mobileSidebar.scss";

export default function MobileSidebar() {
  const [showDrawer, setDrawer] = useState(true);

  return (
    <div id="sidebar-mobile">
      <Affix top={10}>
        <Button type="primary" onClick={() => setDrawer(!showDrawer)}>
          Open
        </Button>
      </Affix>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setDrawer(!showDrawer)}
        visible={showDrawer}
        width='90%'
      >
        <SidebarContent />
      </Drawer>
    </div>
  )
}