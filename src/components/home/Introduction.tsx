import character1 from "../../assets/character/character (1).png";
import character2 from "../../assets/character/character (2).png";
import character3 from "../../assets/character/character (3).png";

import progress from "../../assets/growth.png";
import checkmark from "../../assets/checkmark.png";
const Introduction = () => {
  return (
    <div className="w-full h-250 bg-gray-300 py-full px-10">
      <section id="top">
        <div className="flex flex-row items-center bg-gray-400 p-2 rounded-full w-55 mb-5">
          <div className="w-2 h-2 animate-pulse bg-blue-800 rounded-full mr-2 translate-y-0.25" />
          <p className="text-blue-700 font-bold text-sm">
            {" "}
            Open to new opportunities
          </p>
        </div>
        <h1 className="text-5xl font-extrabold">
          Hi, I'm <span className="text-blue-600">Saba</span>
        </h1>
        <h2 className="text-2xl font-bold mt-2">
          React.js & React native developer
        </h2>
        <p className="text-gray-500 mt-4 ">
          Building accessible, pixel-perfect, and performant web experiences . I
          bridge the gap between design and engineering with a focus on user
          experience
        </p>
        <div className="flex flex-col items-start mt-8">
          <button className="w-40 h-10 bg-blue-700 text-white font-bold rounded-md ">
            View My Work
          </button>
          <button className="border-x border-black w-40 h-10 bg-white text-black font-bold rounded-md shadow-2xl shadow-black mt-2">
            Contact Me
          </button>
        </div>
        <div className="flex flex-row w-70  justify-between relative items-center h-12 mt-15">
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
      <section
        id="bottom"
        className="w-full h-80 bg-white mt-15 rounded-xl p-10 shadow-xl shadow-dark"
      >
        <div className="flex justify-end">
          <div className="w-45 h-20 shadow-xl shadow-dark rounded-xl flex flex-row items-center justify-between px-5 animate-[bounce_3s_infinite]">
            <div className="w-8 h-8 rounded-full bg-green-200 flex justify-center items-center">
              <img
                src={checkmark}
                alt="check mark"
                className="w-5 h-5 rounded-full"
              />
            </div>
            <div>
              <p className="font-bold text-gray-300 text-sm">System Status</p>
              <p className="font-bold text-green-600">Operational</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>PERFORMANCE</p>
              <img
                src={progress}
                alt="progress icon"
                className="w-4 h-4 rounded-full"
              />
            </div>
            <div></div>
            <div>
              <p>Optimization</p>
              <p>98%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
