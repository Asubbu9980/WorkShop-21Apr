import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout and common routes
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";

// Top-level pages
import Overview from "./pages/Overview";
import SocialFeed from "./pages/SocialFeed";
import CourseCatalog from "./pages/CourseCatalog";
import Achievements from "./pages/Achievements";
import ReportsAnalytics from "./pages/ReportsAnalytics";

// Team pages (nested under /teams)
import TeamLearning from "./pages/teams/TeamLearning";
import CreateTeam from "./pages/teams/CreateTeam";
import AllTeams from "./pages/teams/AllTeams";
import TeamDetails from "./pages/teams/TeamDetails";

import Survey from "./pages/Survey"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="social" element={<SocialFeed />} />
        <Route path="catalog" element={<CourseCatalog />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="reports" element={<ReportsAnalytics />} />

        {/* Team routes */}
        <Route path="teams" element={<TeamLearning />}>
          <Route path="create" element={<CreateTeam />} />
          <Route path="all" element={<AllTeams />} />
          <Route path=":id" element={<TeamDetails />} />
        </Route>
        <Route path="/survey" element={<Survey />} /> {/* Add Survey route */}
        {/* Fallback */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
