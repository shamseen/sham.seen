import ProjectCard from './projectCard';
import { MobileViewContext } from '../main';
import { useContext } from 'react';
import "../styles/projectDeck.scss";

const placeholder = new Array(3).fill(
  {
    title: "Project Title",
    image: null,
    desc: 'Nunc eu pharetra metus. Vivamus semper aliquam eros, eget vestibulum nisi consequat ac. Sed consequat viverra purus. Aliquam id blandit quam, at venenatis nulla. Praesent fringilla ultricies velit egestas tempus. Etiam luctus tortor faucibus pretium tempor. Proin non condimentum nunc. In varius, erat a blandit pellentesque, lorem nibh blandit turpis, eu fringilla nulla mi vel tortor. Vivamus egestas odio purus, non egestas nisl scelerisque eget. Nam nec metus malesuada, sodales ante quis, mollis velit.',
    url: '',
    repo: ''
  }
);

export default function ProjectDeck({ projects = placeholder }) {
  // Desktop: row of cards
  // Mobile: carousel of cards
  const { mobileView } = useContext(MobileViewContext);

  return (
    // adding masonry layout if desktop
    <div className={`project-deck${mobileView ? null : ' masonry'}`}>
      {/* TO DO: carousel of cards on mobile */}
      {
        projects.map((p, i) => {
          return <ProjectCard proj={p} key={p.title + i} />;
        })
      }
    </div>
  );
}