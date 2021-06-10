import {
  FeaturedProjects,
  BackendProjects, FrontendProjects
} from "./codeProjects";

import { Divider, Typography } from "antd";
const { Title } = Typography;

export default function PortfolioPage() {
  return (
    <div id='projects-page'>
      <Title level={1} className="title title-view">Portfolio</Title>
      <Divider orientation="left" className="view-divider">
        <Title level={3} className="title title-section">Full Stack</Title>
      </Divider>
      <FeaturedProjects />

      <Divider className="view-divider">
        <Title level={3} className="title title-section">Backend / APIs</Title>
      </Divider>
      <BackendProjects />

      <Divider orientation="right" className="view-divider">
        <Title level={3} className="title title-section">Frontend / ReactJS</Title>
      </Divider>
      <FrontendProjects />
    </div>
  )
}