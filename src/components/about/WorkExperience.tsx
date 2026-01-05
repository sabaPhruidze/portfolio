import briefcase from "../../assets/briefcase.png";
import blueCheckMark from "../../assets/blue_check_mark.png";
const WorkExperience = () => {
  const DATA = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Engineer",
      subTitle: "TechFlow Solutions",
      content:
        " Leading the frontend migration from a legacy monolith to a modern  React/Next.js architecture. Mentoring a team of 4 junior developers and establishing code quality standards.",
      additional: [
        "  Reduced page load times by 40% through optimization. ",
        "Implemented a reusable component library used across 3 products.",
      ],

      tags: ["React", " TypeScript", " GraphQL"],
    },
    {
      year: "2020 - 2022",
      title: "Full Stack Developer",
      subTitle: "Creative Agency X",
      content:
        " Developed custom web solutions for diverse clients ranging from e-commerce to non-profits. Handled end-to-end development including DB design and deployment.",
      additional: [
        "Launched 15+ websites with 100% client satisfaction rate.",
        "Integrated complex payment gateways (Stripe, PayPal)",
      ],
      tags: ["Vue.js", "Node.js", "AWS"],
    },
    {
      year: "2018 - 2020",
      title: "Junior Web Developer",
      subTitle: "StartUp Inc.",
      content:
        " Collaborated with senior developers to fix bugs and implement small features. Gained solid foundation in version control and agile methodologies.",
      tags: ["HTML/CSS", "JavaScript", "Git"],
    },
  ];
  return (
    <section className="w-full h-370 bg-white px-10">
      <div className="w-full h-10 flex flex-row items-center mt-10">
        <div className="w-10 h-10 bg-blue-200 rounded-md flex justify-center items-center mr-3">
          <img src={briefcase} alt="briefcase icon" className="w-6 h-6" />
        </div>
        <h2 className="font-semibold text-4xl">Work Experience</h2>
      </div>
      <div className="mt-10 flex flex-row">
        <div className="w-1 h-330 bg-gray-300 relative">
          <div className="w-4 h-4 bg-blue-700 absolute top-2 -left-1.5 rounded-full" />
          <div className="w-4 h-4 bg-gray-500 absolute top-129 -left-1.5 rounded-full" />
          <div className="w-4 h-4 bg-gray-500 absolute top-256 -left-1.5 rounded-full" />
        </div>
        <div className="flex-1 flex flex-col px-10">
          {DATA.map((item) => (
            <div className="flex flex-col w-full">
              <div
                className={`bg-blue-100 rounded-md px-4 py-1 flex justify-center w-40 ${
                  item.year === "2022 - Present" ? "mt-0" : "mt-10"
                }`}
              >
                <p
                  className={`${
                    item.year === "2022 - Present"
                      ? "text-blue-700"
                      : "text-gray-700"
                  } font-semibold `}
                >
                  {item.year}
                </p>
              </div>
              <h2 className="font-semibold text-xl mt-5">{item.title}</h2>
              <h3 className="font-bold text-gray-500 mt-1">{item.subTitle}</h3>
              <div className="bg-gray-200 mt-10 rounded-xl p-5">
                <p className="text-gray-600">{item.content}</p>
                {item.additional?.map((add) => (
                  <div className="flex flex-row items-start mt-3">
                    <img
                      src={blueCheckMark}
                      alt="check mark"
                      className="w-4 h-4 translate-y-1 mr-2"
                    />
                    <p className="text-gray-600">{add}</p>
                  </div>
                ))}
                <div className="flex flex-row gap-3 mt-3">
                  {item.tags.map((tag) => (
                    <p className="text-gray-600 bg-white px-2 py-0.5 rounded-md">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
