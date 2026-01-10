import right from "../../assets/skillLab/right.png";
import sort from "../../assets/skillLab/sort.png";
import infinite_scroll from "../../assets/skillLab/infinite_scroll.png";
import fourCube from "../../assets/skillLab/4 cube.png";
import advanced_theming_System from "../../assets/skillLab/advanced_theming_System.png";
import drag_drop from "../../assets/skillLab/drag_drop.png";

const Main = () => {
  const DATA = [
    {
      id: 1,
      src: drag_drop,
      alt: "drap drop image",
      tags: ["React DnD", "Sortable"],
      title: "Drag & Drop Kanban",
      content:
        "  A flud Drag-and-drop interface with optimistic updates and accessible keyboard...",
    },
    {
      id: 2,
      src: advanced_theming_System,
      alt: "advanced theming System image",
      tags: ["Tailwind", "Context API"],
      title: "Advanced Theming System",
      content:
        "System-preference aware dark mode toggle with local storage persistence and CSS...",
    },
    {
      id: 3,
      src: infinite_scroll,
      alt: "infinite scroll image",
      tags: ["React Query", "Intersection Observer"],
      title: "Infinite Scroll Hook",
      content:
        "A custom hook for infinite loading with intersection observer, featuring loading...",
    },
  ];
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
      <div className="w-full h-100 border border-gray-500 rounded-xl bg-white">
        <img
          src={drag_drop}
          alt="drap drop image"
          className="w-full h-40 object-cover rounded-t-xl"
        />
        <div className="px-5">
          <div className="flex flex-row gap-3 py-5">
            <div className="px-2 py-1 bg-blue-300 rounded-xl">
              <p className="text-blue-700 font-semibold text-sm">React DnD</p>
            </div>
            <div className="px-2 py-1 bg-gray-200 rounded-xl">
              <p className="font-semibold text-gray-700 text-sm">Sortable</p>
            </div>
          </div>
          <h2 className="font-bold text-xl mb-5">Drag & Drop Kanban</h2>
          <p>
            A flud Drag-and-drop interface with optimistic updates and
            accessible keyboard...
          </p>
          <div className="w-full h-0.5 bg-gray-300 my-3" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <p className="mr-2 font-semibold">Try Demo</p>
              <img
                src={right}
                alt="right icon"
                className="w-4 h-4 translate-y-1"
              />
            </div>
            <p className="font-bold scale-y-[1.5] -translate-y-0.5 mr-2 text-gray-500">
              &lt; &gt;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
