import { useContext } from 'react';
import { MobileViewContext } from '../../main';
import { Drawer } from 'antd';

import { MenuFoldOutlined } from '@ant-design/icons';
import "../../styles/mobileSidebar.scss";

export default function MobileSidebar() {
  const { showDrawer, setDrawer, sidebarContent } = useContext(MobileViewContext);

  return (
    <Drawer
      placement="left"
      onClose={() => setDrawer(!showDrawer)}
      visible={showDrawer}
      closeIcon={<MenuFoldOutlined />}
    >
      {sidebarContent}
    </Drawer>
  )
}