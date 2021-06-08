import { MobileViewContext } from '../main';
import { useContext } from 'react';

import ProjectsPage from './ProjectsPage';
import { Affix, Button, Card, Space, Typography } from "antd";
const { Title } = Typography;
import { UserSwitchOutlined } from '@ant-design/icons';

export default function Body() {
  const { showDrawer, setDrawer, mobileView } = useContext(MobileViewContext);

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

      {/* Brand / Objective statement */}
      <Card id="objectiveStmt" bordered={false}>
        <Title level={3}>sham•seen</Title>
        <div>
          <i>noun</i>
          <ol>
            <li>Full-stack JavaScript developer; biomedical researcher and tissue engineer; a double threat.</li>
            <li>MERN web apps that improve research processes and accessibility to non-coders (see: .pnGCAT).</li>
          </ol>
        </div>
        <div>
          <i>adjective</i>
          <ul style={{ listStyleType: "none" }}>
            <li>Good workflow management; meticulous for best practices.</li>
          </ul>
        </div>
      </Card>

      {/* Views */}
      <Space
        id="projects"
        direction="vertical"
        align="block"
        size="large"
      >

        <ProjectsPage />

        {/* {views.map((view, i) => {
          return (
            <div key={i}>
              <Divider className="view-divider">
                <Title level={2} className="view-title">{view.title}</Title>
              </Divider>
              {view.comp}
            </div>
          )
        })} */}
      </Space>
    </div>
  )
}