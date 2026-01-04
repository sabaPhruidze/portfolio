import map from "../../assets/map.png";
const Experience = () => {
  return (
    <div className="px-10 w-full h-80 bg-white">
      <div className="mt-20 mb-5 bg-blue-100 w-30 flex flex-row items-center rounded-xl h-8 justify-center">
        <img src={map} alt="map icon" className="w-4 h-4 mr-1" />
        <h1 className="text-blue-700 font-semibold text-sm">My Journey</h1>
      </div>
      <section className="min-w-90">
        <h2 className="font-bold text-3xl mb-5">
          Experience & <span className="text-blue-700">Background</span>
        </h2>
        <p className="text-gray-500">
          I've spent the last 4+ years building software for startups, agencies,
          and enterprise clients. Here's a look at my professional path and what
          shapes my approach to development
        </p>
      </section>
    </div>
  );
};

export default Experience;
