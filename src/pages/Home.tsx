import Introduction from "../components/home/Introduction";
import Skills from "../components/home/Skills";
import About from "../components/home/About";
const Home = () => {
  return (
    <div className="select-none">
      <Introduction />
      <Skills />
      <About />
    </div>
  );
};

export default Home;
