import Intro from "../components/skilllab/Intro";
import Main from "../components/skilllab/Main";
import Subscribe from "../components/skilllab/Subscribe";
const SkillLab = () => {
  return (
    <div className="w-full px-10 py-20 bg-gray-300">
      <Intro />
      <Main />
      <Subscribe />
    </div>
  );
};

export default SkillLab;
