import { Divider, Typography } from "antd";
import { Projects } from '../module';
const { Title } = Typography;

export default function PortfolioPage({ projects }) {

  return (
    <div id='projects-page'>

      <Title level={1} className="title title-view">Portfolio Highlights</Title>
      <Divider orientation="left" className="view-divider">
        <Title level={3} className="title title-section">Full Stack</Title>
      </Divider>


      <Projects.ProjectDeck projects={projects.fullstack} idName='proj-featured' />

      <Divider className="view-divider">
        <Title level={3} className="title title-section">Backend / APIs</Title>
      </Divider>

      <Projects.ProjectDeck projects={projects.backend} idName='proj-backend' />

      <Divider orientation="right" className="view-divider">
        <Title level={3} className="title title-section">Frontend / ReactJS</Title>
      </Divider>

      <Projects.ProjectDeck projects={projects.frontend} idName='proj-frontend' />
    </div>
  )
}