// treeshaking for imports in main

import BackgroundPage from "./BackgroundPage";
import HomePage from "./pages/homePage";
import Body from "./body";
import PortfolioPage from "./PortfolioPage";

const Pages = {
  Background: BackgroundPage,
  Body: Body,
  Home: HomePage,
  Portfolio: PortfolioPage,
};

export default Pages;