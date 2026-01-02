import lab from "../../assets/explore/laboratory.png";
import front from "../../assets/explore/web-design.png";
import back from "../../assets/explore/back.png";
import appdev from "../../assets/explore/app-development.png";
import accesability from "../../assets/explore/accessibility.png";
import uiux from "../../assets/explore/ux-design.png";
import cloud from "../../assets/explore/cloud-computing.png";
const Proficiency = () => {
  const data = [
    {
      id: 1,
      name: "Frontend",
      image: front,
    },
    {
      id: 2,
      name: "Backend",
      image: back,
    },
    {
      id: 3,
      name: "Tools & Deployment",
      image: cloud,
    },
    {
      id: 4,
      name: "Mobile",
      image: appdev,
    },
    {
      id: 5,
      name: "UI Design",
      image: uiux,
    },
    {
      id: 6,
      name: "Accessibility",
      image: accesability,
    },
  ];
  return (
    <section className="w-full h-150 bg-white ">
      <div className="px-5">
        <h2 className="font-bold text-2xl mt-10">Technical Proficinecy</h2>
        <p className="text-gray-500 font-semibold text-sm">
          My preferred tools for building modern applications
        </p>

        <div className="w-full flex justify-end">
          <button className="w-50 bg-gray-300 h-10 mt-5 rounded-xl flex flex-row justify-center items-center cursor-pointer">
            <p className="font-bold mr-3">Explore Skills Lab </p>
            <img src={lab} alt="lab icon" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full h-100 flex flex-wrap my-10 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-30 h-30 border border-gray-200 mx-5 flex justify-center items-center flex-col rounded-xl"
          >
            <img src={item.image} alt={item.name} className="w-8 h-8 mb-4 " />
            <h3 className="font-bold text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proficiency;
