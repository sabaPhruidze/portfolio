import Experience from "../components/about/Experience";
import AboutMe from "../components/about/AboutMe";
import WorkExperience from "../components/about/WorkExperience";
import Education from "../components/about/Education";
import Ready from "../components/about/Ready";
const About = () => {
  return (
    <div>
      <Experience />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Ready />
      <div className="w-full h-50 bg-gray-300" />
    </div>
  );
};

export default About;
