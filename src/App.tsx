import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const Project = lazy(() => import("./pages/Project"));
  const SkillLab = lazy(() => import("./pages/SkillLab"));
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p>იტვირთება...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<SkillLab />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
