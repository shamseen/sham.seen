import { MobileViewContext } from '../main';
import { useContext } from 'react';

import { Affix, Button, Card, Space, Typography } from "antd";
const { Title } = Typography;
import { UserSwitchOutlined } from '@ant-design/icons';

export default function Body({ page }) {
  const { footer, showDrawer, setDrawer, mobileView } = useContext(MobileViewContext);

  const mobileSidebarBtn =
    <Affix offsetTop={60}>
      <Button size="large"
        icon={<UserSwitchOutlined />}
        onClick={() => setDrawer(!showDrawer)} />
    </Affix>

  return (
    <div id="body">
      {/* Mobile sidebar btn */}
      {mobileView ? mobileSidebarBtn : null}
      {page}
      {footer}
    </div>
  )
}