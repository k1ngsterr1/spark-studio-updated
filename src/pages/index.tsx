import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "@shared/config/routes";
import NotFound from "./not-found/NotFound";

const index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path={ROUTE_CONSTANTS.HOME} />
        </Routes>
      </Router>
    </>
  );
};

export default index;
