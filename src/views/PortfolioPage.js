import { Projects } from "../module";

import { Divider, Typography } from "antd";
const { Title } = Typography;

export default function PortfolioPage() {
  return (
    <div id='projects-page'>
      <Title level={1} className="title title-view">Portfolio Highlights</Title>

      <Divider orientation="left" className="view-divider">
        <Title level={3} className="title title-section">Full Stack</Title>
      </Divider>
      <Projects.Featured />

      <Divider className="view-divider">
        <Title level={3} className="title title-section">Backend / APIs</Title>
      </Divider>
      <Projects.Backend />

      <Divider orientation="right" className="view-divider">
        <Title level={3} className="title title-section">Frontend / ReactJS</Title>
      </Divider>
      <Projects.Frontend />
    </div>
  )
}