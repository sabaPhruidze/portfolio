import Introduction from "../components/home/Introduction";
import Skills from "../components/home/Skills";
import About from "../components/home/About";
import Proficiency from "../components/home/proficiency";
const Home = () => {
  return (
    <div className="select-none">
      <Introduction />
      <Skills />
      <About />
      <Proficiency />
    </div>
  );
};

export default Home;
