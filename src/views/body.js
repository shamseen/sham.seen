import { FeaturedProjects, BackendProjects, FrontendProjects } from "./";
import { Card, Space, Typography } from "antd";
const { Title } = Typography;

export default function Body() {
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
        <FeaturedProjects />
        <BackendProjects />
        <FrontendProjects />
      </Space>
    </div>
  )
}

/*
---  BRAND STATEMENT ---
=> experience instead of aspirations (keep same company bit)
=> automating processes for employees non/coders
=> SBOL
=> what u do; extension of that (automating processes); plug to skillset / proj; scrum master
*/