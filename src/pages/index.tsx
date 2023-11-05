import { FC } from "react";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/config/routes";

// Pages
import { HomePage } from "@pages/home";
import { ApplicationsPage } from "@pages/applications";
import { WebsitesPage } from "@pages/websites";
import { SeoPage } from "@pages/seo";
import { NotFound } from "@pages/notFound";
import { PortfolioDetails } from "@pages/portfolioDetails";
import { Portfolio } from "@pages/portfolio";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route
          path={ROUTE_CONSTANTS.APPLICATIONS}
          element={<ApplicationsPage />}
        />
        <Route path={ROUTE_CONSTANTS.WEBSITES} element={<WebsitesPage />} />
        <Route path={ROUTE_CONSTANTS.SEO} element={<SeoPage />} />
        <Route path={ROUTE_CONSTANTS.PORTFOLIO} element={<Portfolio />} />
        <Route
          path={ROUTE_CONSTANTS.PORTFOLIO_DETAIL}
          element={<PortfolioDetails />}
        />
      </Routes>
    </Router>
  );
};
