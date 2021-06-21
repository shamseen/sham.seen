import { Typography } from "antd";
import { Projects } from '../module';

export default function PortfolioPage({ projects }) {

  return (
    <div id='projects-page' className='page'>

      <Typography.Title level={1} className="title title-view">
        Portfolio Highlights
      </Typography.Title>

      <Projects.ProjectDeck
        projects={projects.fullstack}
        title='Full Stack'
        className='project-deck'
        id='proj-featured'
      />

      <Projects.ProjectDeck
        projects={projects.backend}
        title='Backend / APIs'
        className='project-deck'
        id='proj-backend'
      />

      <Projects.ProjectDeck
        projects={projects.frontend}
        title='Frontend / ReactJS'
        className='project-deck'
        id='proj-frontend'
      />
    </div>
  )
}