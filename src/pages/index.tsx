import { FC } from "react";

// Router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "@pages/home/ui";
import { ApplicationsPage } from "@pages/applications/ui";
import { SeoPage } from "@pages/seo/ui";
import { WebsitesPage } from "@pages/websites/ui";
import { Portfolio } from "@pages/portfolioDetails/ui/ui";
import { PortfolioDetails } from "@pages/portfolioDetails/ui";
import { NotFound } from "@pages/notFound/ui";
import { LogoPage } from "./logo/ui";
import { ServicesPage } from "./services/ui";
import { AboutPage } from "./about/ui";
import { ComingSoonPage } from "./ComingSoon/ui";

// Content
import { portfolioContent } from "@shared/lib/data/portfolioContent";
import { GamesPage } from "./games/ui";
// import { SnakePage } from "./snake/ui";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/index.html" element={<Navigate to="/home" />} />
        <Route path="/index.shtml" element={<Navigate to="/home" />} />
        <Route
          path={ROUTE_CONSTANTS.APPLICATIONS}
          element={<ApplicationsPage />}
        />
        <Route path={ROUTE_CONSTANTS.ABOUT} element={<AboutPage />} />
        <Route path={ROUTE_CONSTANTS.WEBSITES} element={<WebsitesPage />} />
        <Route path={ROUTE_CONSTANTS.GAMES} element={<GamesPage />} />
        <Route path={ROUTE_CONSTANTS.SEO} element={<SeoPage />} />
        <Route path={ROUTE_CONSTANTS.LOGO} element={<LogoPage />} />
        <Route path={ROUTE_CONSTANTS.PORTFOLIO} element={<Portfolio />} />
        <Route path={ROUTE_CONSTANTS.SERVICES} element={<ServicesPage />} />
        {Object.entries(portfolioContent).map(([portfolioCase, content]) => (
          <Route
            key={portfolioCase}
            path={ROUTE_CONSTANTS.PORTFOLIO_DETAIL.replace(
              ":portfolioCase",
              portfolioCase
            )}
            element={<PortfolioDetails {...content} />}
          />
        ))}

        <Route path={ROUTE_CONSTANTS.PRODUCTS} element={<ComingSoonPage />} />
        <Route path={ROUTE_CONSTANTS.SKILLS} element={<ComingSoonPage />} />
        {/* <Route path={ROUTE_CONSTANTS.SNAKE_GAME} element={<SnakePage />} /> */}
      </Routes>
    </Router>
  );
};
