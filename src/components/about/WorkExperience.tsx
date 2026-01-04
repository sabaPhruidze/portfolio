import briefcase from "../../assets/briefcase.png";

const WorkExperience = () => {
  return (
    <section className="w-full h-200 bg-white px-10">
      <div className="w-full h-10 flex flex-row items-center mt-10">
        <div className="w-10 h-10 bg-blue-200 rounded-md flex justify-center items-center mr-3">
          <img src={briefcase} alt="briefcase icon" className="w-6 h-6" />
        </div>
        <h2 className="font-semibold text-4xl">Work Experience</h2>
      </div>
      <div className="mt-10 flex flex-row">
        <div className="w-1 h-150 bg-gray-300 relative">
          <div className="w-4 h-4 bg-blue-700 absolute top-0 -left-1.5 rounded-full" />
        </div>
        <div className="px-10 w-full">
          <div className="bg-blue-100 rounded-md px-4 py-1 w-33">
            <p className="text-blue-700 font-semibold">2022-Present</p>
          </div>
          <h2 className="font-semibold text-xl mt-5">
            Senior Frontend Engineer
          </h2>
          <h3 className="font-bold text-gray-500 mt-1">TechFlow Solutions</h3>
          <div className="h-70 bg-gray-200 mt-10 rounded-xl p-2">
            <p className="text-gray-600">
              Leading the frontend migration from a legacy monolith to a modern
              React/Next.js architecture. Mentoring a team of 4 junior
              developers and establishing code quality standards. <br />
              Reduced page load times by 40% through optimization. <br />
              Implemented a reusable component library used across 3 products.
            </p>
            <div className="flex flex-row gap-3">
              <p className="text-gray-600 bg-white px-2 py-0.5 rounded-md">
                React
              </p>
              <p className="text-gray-600 bg-white px-2 py-0.5 rounded-md">
                {" "}
                TypeScript
              </p>{" "}
              <p className="text-gray-600 bg-white px-2 py-0.5 rounded-md">
                GraphQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
