import { FeaturedProjects, BackendProjects, FrontendProjects } from "./codeProjects";
import { Card, Divider, Space, Typography } from "antd";
const { Title } = Typography;

export default function Body() {
  const views = [
    {
      title: 'My Favorites',
      comp: <FeaturedProjects />
    },

    // {
    //   title: 'Backend Work',
    //   comp: <BackendProjects />
    // },

    // {
    //   title: 'Frontend Work',
    //   comp: <FrontendProjects />
    // }
  ]
  return (
    <div id="body">
      {/* Brand / Objective statement */}
      <Card id="objectiveStmt" bordered={false}>
        <Title level={3}>sham•seen</Title>
        <div>
          <i>noun</i>
          <ol>
            <li>Full-stack MERN developer; biomedical researcher in tissue engineering; a double threat.</li>
            <li>Web apps that improve research processes and accessibility to non-coders (see: .pnGCAT).</li>
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

        {views.map((view, i) => {
          return (
            <div key={i}>
              <Divider className="view-divider">
                <Title level={2} className="view-title">{view.title}</Title>
              </Divider>
              {view.comp}
            </div>
          )
        })}
      </Space>
    </div>
  )
}