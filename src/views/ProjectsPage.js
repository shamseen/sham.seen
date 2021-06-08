import {
  FeaturedProjects,
  BackendProjects, FrontendProjects
} from "./codeProjects";

import { Divider, Typography } from "antd";
const { Title } = Typography;

export default function ProjectsPage() {
  return (
    <div id='projects-page'>
      {/* <Title level={1} className="title title-view">Projects</Title> */}
      <Divider className="view-divider">
        <Title level={2} className="title title-section">Full Stack</Title>
      </Divider>
      <FeaturedProjects />

      <Divider className="view-divider">
        <Title level={2} className="title title-section">Backend / APIs</Title>
      </Divider>
      <BackendProjects />

      <Divider className="view-divider">
        <Title level={2} className="title title-section">Frontend / ReactJS</Title>
      </Divider>
      <FrontendProjects />
    </div>
  )
}