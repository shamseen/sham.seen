import { useContext } from 'react';
import { MobileViewContext } from '../../main';
import { Drawer } from 'antd';

import { MenuFoldOutlined } from '@ant-design/icons';
import SidebarContent from '../sidebarContent';
import "../../styles/mobileSidebar.scss";

export default function MobileSidebar() {
  const { showDrawer, setDrawer } = useContext(MobileViewContext);

  return (
    <Drawer
      placement="left"
      onClose={() => setDrawer(!showDrawer)}
      visible={showDrawer}
      closeIcon={<MenuFoldOutlined />}
    >
      <SidebarContent />
    </Drawer>
  )
}