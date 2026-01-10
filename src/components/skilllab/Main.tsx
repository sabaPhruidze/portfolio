import Card from "./Card";
import sort from "../../assets/skillLab/sort.png";
import infinite_scroll from "../../assets/skillLab/infinite_scroll.png";
import fourCube from "../../assets/skillLab/4 cube.png";
import advanced_theming_System from "../../assets/skillLab/advanced_theming_System.png";
import drag_drop from "../../assets/skillLab/drag_drop.png";

export interface Data {
  id: number;
  src: string;
  alt: string;
  tags: { id: number; name: string }[];
  title: string;
  content: string;
}

const Main = () => {
  const DATA: Data[] = [
    {
      id: 1,
      src: drag_drop,
      alt: "drap drop image",
      tags: [
        { id: 1, name: "React DnD" },
        { id: 2, name: "Sortable" },
      ],
      title: "Drag & Drop Kanban",
      content:
        "  A flud Drag-and-drop interface with optimistic updates and accessible keyboard...",
    },
    {
      id: 2,
      src: advanced_theming_System,
      alt: "advanced theming System image",
      tags: [
        { id: 3, name: "Tailwind" },
        { id: 4, name: "Context API" },
      ],
      title: "Advanced Theming System",
      content:
        "System-preference aware dark mode toggle with local storage persistence and CSS...",
    },
    {
      id: 3,
      src: infinite_scroll,
      alt: "infinite scroll image",
      tags: [
        { id: 5, name: "React Query" },
        { id: 6, name: "Intersection Observer" },
      ],
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
      <div className="flex flex-row gap-3 mt-5 ">
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
      <Card DATA={DATA} />
    </section>
  );
};

export default Main;
