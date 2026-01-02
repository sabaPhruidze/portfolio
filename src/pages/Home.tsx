import Introduction from "../components/home/Introduction";
import Skills from "../components/home/Skills";
import About from "../components/home/About";
import Proficiency from "../components/home/Proficiency";
const Home = () => {
  return (
    <div className="select-none">
      <Introduction />
      <Skills />
      <About />
      <Proficiency />
      <div className="w-full h-20 bg-gray-300"></div>
    </div>
  );
};

export default Home;
