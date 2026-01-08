import right from "../../assets/skillLab/right.png";
import sort from "../../assets/skillLab/sort.png";
import infinite_scroll from "../../assets/skillLab/infinite_scroll.png";
import fourCube from "../../assets/skillLab/4 cube.png";
import advanced_theming_System from "../../assets/skillLab/advanced_theming_System.png";
import drag_drop from "../../assets/skillLab/drag_drop.png";

const Main = () => {
  return (
    <section className="my-10">
      <div className="flex flex-row gap-3">
        <button className="py-2 px-5 bg-black text-white rounded-2xl">
          All
        </button>
        <button className="py-2 px-5 bg-white border border-gray-500 rounded-2xl">
          React Components
        </button>
        <button className="py-2 px-5 bg-white border border-gray-500 rounded-2xl">
          Animations
        </button>
      </div>
      <div className="flex flex-row gap-3 mt-5 mb-10">
        <p>View:</p>
        <div className="bg-white rounded-md">
          <img
            src={fourCube}
            alt="four cube icon"
            className="w-7 h-7 rounded-md"
          />
        </div>
        <img src={sort} alt="sorting icon" className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Main;
