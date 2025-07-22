import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BAProgrammes from "../pages/BAProgrammes/BAProgrammes";
import SuccessStories from "../pages/SuccessStories/SuccessStories";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/FAQ/FAQ";
import AIlabs from "../pages/FAQ/SubPages/AILabs";
import AIStudies from "../pages/FAQ/SubPages/AIStudies";
import AIKnowledge from "../pages/FAQ/SubPages/AIKnowledge";
import Blog from "../pages/Blog/Blog";

function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.BAPROGRAMMES} element={<BAProgrammes />} />
      <Route path={ROUTES.SUCCESSSTORIES} element={<SuccessStories />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.FAQ.MAIN} element={<FAQ />} />
      <Route path={ROUTES.FAQ.FAQ_AI_LABS} element={<AIlabs />} />
      <Route path={ROUTES.FAQ.FAQ_AI_STUDIES} element={<AIStudies />} />
      <Route path={ROUTES.FAQ.FAQ_AI_KNOWLEDGE} element={<AIKnowledge />} />
      <Route path={ROUTES.BLOG} element={<Blog />} />
    </Routes>
  );
}

export default AppRoutes;
