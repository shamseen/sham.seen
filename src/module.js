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
import HomePage from "./views/HomePage";
import Body from "./views/body";
import PortfolioPage from "./views/PortfolioPage";

export const Pages = {
  Background: BackgroundPage,
  Body: Body,
  Home: HomePage,
  Portfolio: PortfolioPage,
};

/* -- Portfolio -- */
import BackendProjects from './views/codeProjects/backendProjects';
import FeaturedProjects from './views/codeProjects/featuredProjects';
import FrontendProjects from './views/codeProjects/frontendProjects';

export const Projects = {
  Backend: BackendProjects,
  Featured: FeaturedProjects,
  Frontend: FrontendProjects,
}