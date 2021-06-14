import ProjectCard from './projectCard';
import { MobileViewContext } from '../main';
import { useContext } from 'react';
import "../styles/projectDeck.scss";

const placeholder = new Array(3).fill(
  {
    "id": "test ===================================",
    "ownerId": "92f33354-29f9-4445-9a28-45fff4b442e3",
    "createdAt": "2021-06-11T18:36:29.928+00:00",
    "cid": "bafybeigjeeooiut52oa7po77uuj77mcihbvdfrzj2monlz6w2ztq4462ty",
    "filename": "ludo.png",
    "isPublic": false,
    "data": {
      "body": "An online multiplayer rendition of Ludo or Pachisi, a classic board game from the Indian subcontinent. Players race to get all their tokens around the board and through to the win space! Styled with @material-ui and SCSS; leverages the boardgame.io game engine for state management and online multiplayer functionality. In the future, it will use antd components and bgio's Lobby functionality. This is the most complex code I've ever written omg",
      "name": "ludo-boardgame-js/tree/multiplayer",
      "size": 791297,
      "tags": [],
      "type": "image/png",
      "author": "projects",
      "source": "https://shamseen.github.io/ludo-boardgame-js/",
      "blurhash": "U4I||P{U00Gr^toJ9+WY04CMQ8zYIyW;x9n$"
    },
    "likeCount": 0,
    "downloadCount": 0,
    "saveCount": 0
  }
);

export default function ProjectDeck({ projects, idName }) {
  // Desktop: row of cards
  // Mobile: carousel of cards
  const { mobileView } = useContext(MobileViewContext);

  return (
    // adding masonry layout if desktop
    <div id={idName} className={`project-deck${mobileView ? null : ' masonry'}`}>
      {/* TO DO: carousel of cards on mobile */}


      {
        // in case user goes directly to url

        projects && Array.isArray(projects)
          ? projects.map((p, i) => { return <ProjectCard proj={p} key={p.filename + i} /> })
          : null
      }


    </div>
  );
}