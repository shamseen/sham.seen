import { useContext } from 'react';
import { MobileViewContext } from '../../main';
import { Drawer } from 'antd';

import "../../styles/mobileSidebar.scss";

export default function MobileSidebar() {
  const { showDrawer, setDrawer, sidebarContent } = useContext(MobileViewContext);

  return (
    <Drawer
      placement="left"
      onClose={() => setDrawer(!showDrawer)}
      visible={showDrawer}
    >
      {sidebarContent}
    </Drawer>
  )
}