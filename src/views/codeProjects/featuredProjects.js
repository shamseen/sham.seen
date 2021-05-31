import ProjectDeck from "../../components/projectDeck";

export default function FeaturedProjects() {
  const projects = [
    {
      title: ".pnGCAT",
      image: 'https://repository-images.githubusercontent.com/366115065/78fafe00-be78-11eb-9718-45e030ca0001',
      desc: `My pride and joy. Users earch and diagram DNA Sequences (.pnGCATs!) from the European Nucleotide Archive. This integrates SBOL Visual Ontology symbols, a systematic approach to diagramming synthetic genetic designs. Any modifications to the .pnGCAT will be available for everyone to use. In the future, the .pnGCAT webservice will leverage databases such as SynbioHub, GenBank, etc.`,
      url: 'https://pngcat.netlify.app/',
      repo: 'https://github.com/shamseen/pngcat-client'
    },
    {
      title: "Ludo",
      image: 'https://repository-images.githubusercontent.com/350417629/efe4c680-be79-11eb-9035-9345d026db6a',
      desc: `An online multiplayer rendition of Ludo or Pachisi, a classic board game from the Indian subcontinent. Players race to get all their tokens around the board and through to the win space! Styled with @material-ui and SCSS; leverages the boardgame.io game engine for state management and online multiplayer functionality. In the future, it will use antd components and bgio's Lobby functionality. This is the most complex code I've ever written omg`,
      url: 'https://shamseen.github.io/ludo-boardgame-js/',
      repo: 'https://github.com/shamseen/ludo-boardgame-js/tree/multiplayer'
    },
    {
      title: "Bookmark'd",
      image: 'https://repository-images.githubusercontent.com/370492789/2caac080-be6e-11eb-9ea9-70e5184794de',
      desc: `My first stab at MERN stack: an online manager for your favorite webpages. Styled with @material-ui and SCSS and features async calls to a custom express API utilizing Mongoose ODM.`,
      url: 'https://bookmarkd-by-sham.netlify.app/',
      repo: 'https://github.com/shamseen/bookmarkd-client-MERN'
    },
  ]

  return (
    <ProjectDeck id="featuredPrj" projects={projects} />
  )
}