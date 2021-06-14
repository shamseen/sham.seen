/* -- Sidebar -- */
import DesktopSidebar from './views/sidebar/desktopSidebar';
import MobileSidebar from './views/sidebar/mobileSidebar';
import SidebarContent from './views/sidebar/sidebarContent';

export const Sidebar = {
  Content: SidebarContent,
  Desktop: DesktopSidebar,
  Mobile: MobileSidebar,
}

/* -- Pages -- */
import BackgroundPage from "./views/BackgroundPage";
import Body from "./views/body";
import HomePage from "./views/HomePage";
import Navbar from "./views/Navbar"
import PortfolioPage from "./views/PortfolioPage";

export const Pages = {
  Background: BackgroundPage,
  Body: Body,
  Home: HomePage,
  Navbar: Navbar,
  Portfolio: PortfolioPage,
};

/* -- Portfolio -- */
import ProjectDeck from './components/projectDeck';
import ProjectCard from './components/projectCard';

export const Projects = {
  ProjectCard: ProjectCard,
  ProjectDeck: ProjectDeck,
}

/* -- APIs -- */
import { getFiles } from './dataServices/slateHostDataService';

export const SlateHostDS = {
  getFiles: getFiles
};