import fourCube from "../../assets/skillLab/4 cube.png";
import advanced_theming_System from "../../assets/skillLab/advanced_theming_System.png";
import drag_drop from "../../assets/skillLab/drag_drop.png";
import experiment from "../../assets/skillLab/experiment.png";
import infinite_scroll from "../../assets/skillLab/infinite_scroll.png";
import interactive from "../../assets/skillLab/interactive.png";
import play_button from "../../assets/skillLab/play-button.png";
import right from "../../assets/skillLab/right.png";
import sort from "../../assets/skillLab/sort.png";
import star from "../../assets/skillLab/star.png";

const Intro = () => {
  return (
    <section>
      <div className="flex flex-row">
        <img
          src={experiment}
          alt="experiment icon"
          className="w-4 h-4 mr-2 translate-y-0.5"
        />
        <p className="text-blue-700 font-bold text-sm">THE PLAYGROUND</p>
      </div>
      <h2 className="font-bold text-5xl my-5">Skills Lab</h2>
      <p className="text-gray-700 ">
        A collection of interactive experiments, UI components, and code
        snippets designed to demonstate technical capabilities in a practical
        environment
      </p>
      <div className="flex flex-row">
        <img
          src={star}
          alt="star icon"
          className="w-4 h-4 mr-2 translate-y-7.5"
        />
        <h3 className="font-bold text-2xl my-5">Featured Experiment</h3>
      </div>
      <div className=" px-5 py-10 shadow-xl shadow-black rounded-xl flex justify-center flex-col items-center">
        <div className="w-60 h-60 shadow-xl shadow-black rounded-sm bg-gray-100 flex justify-center items-center flex-col">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center animate-pulse ">
            <img
              src={interactive}
              alt="interactive image"
              className="w-15 h-15"
            />
          </div>
          <p className="text-blue-700 text-sm my-2">Interactive Graph Node</p>
          <div className="flex flex-row gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
        </div>
        <div className="w-full flex justify-end mt-10 mb-5">
          <div className="flex flex-row bg-white py-1 px-4 rounded-xl">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-[ping_2s_infinite] translate-y-1 mr-2" />
            <p className="font-semibold text-sm">Live Preview</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
