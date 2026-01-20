import character1 from "../../assets/character/character (1).png";
import character2 from "../../assets/character/character (2).png";
import character3 from "../../assets/character/character (3).png";
import { Link } from "react-router-dom";
import Performance from "./Performance";
const Introduction = () => {
  return (
    <div className="w-full h-280 sm:h-250 bg-gray-100 py-20 px-5 flex flex-col">
      <section>
        <div className="flex flex-row items-center bg-gray-400 p-2 rounded-full w-55 mb-5">
          <div className="w-2 h-2 animate-pulse bg-blue-800 rounded-full mr-2 translate-y-px" />
          <p className="text-blue-700 font-bold text-sm">
            {" "}
            Open to new opportunities
          </p>
        </div>
        <h1 className="text-5xl font-extrabold">
          Hi, I'm <span className="text-blue-600">Saba</span>
        </h1>
        <h2 className="text-2xl font-bold mt-2">
          React.js, Next.js & React native (expo) developer
        </h2>
        <p className="text-gray-500 mt-4 sm:w-150">
          I build fast, modern websites and web apps with React and Next.js,
          focusing on clean UI, strong SEO, and reliable API integration. I also
          develop mobile applications with React Native (Expo), bringing the
          same attention to performance and usability. I work both on one-time
          projects for private clients and on long-term collaborations as a
          full-stack partner.
        </p>
        <div className="flex flex-col mt-8 md:flex-row gap-3 items-center sm:items-start">
          <Link
            to="/projects"
            className="w-60 h-10 sm:w-50 bg-blue-700 text-white font-bold rounded-md flex justify-center items-center"
          >
            View My Work
          </Link>
          <Link
            to="/contacts"
            className="border-x border-black w-60 h-10 sm:w-50 bg-white text-black font-bold rounded-md shadow-2xl shadow-black flex justify-center items-center md:shadow-white"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex flex-row w-70 justify-between relative items-center h-12 mt-15 ">
          <div>
            <img
              src={character2}
              alt="An animated person with glasses coding"
              className="w-12 h-12 rounded-full absolute top-0 left-7"
            />
            <img
              src={character1}
              alt="An animated person with glasses coding"
              className="w-12 h-12 rounded-full absolute top-0 left-14"
            />
            <img
              src={character3}
              alt="An animated person with glasses coding"
              className="w-12 h-12 rounded-full "
            />
          </div>
          <div>
            <strong>20+ Projects</strong>
            <p className="text-gray-500 font-semibold">Delivered succesfully</p>
          </div>
        </div>
      </section>
      <Performance />
    </div>
  );
};

export default Introduction;
