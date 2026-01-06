import Card from "../components/project/Card";

import analytics from "../assets/card/e-commerce.png";
import analytics_icon from "../assets/card/analytics_icon.png";

import finance_tracker from "../assets/card/tracker.png";
import finance_tracker_icon from "../assets/card/wallet_icon.png";

import api from "../assets/card/devdocs_api.png";
import api_icon from "../assets/card/api_icon.png";

import threed_icon from "../assets/card/3d (1).png";
import threed from "../assets/card/3d.png";

export interface Data {
  id: number;
  mainImage: string;
  mainImageAlt: string;
  title: string;
  iconImage: string;
  iconImageAlt: string;
  content: string;
  tag: string[];
  demo: string;
  code: string;
}

const Project = () => {
  const show = ["All", "Web App", "Mobile", "Open Source", "Design System"];

  const DATA: Data[] = [
    {
      id: 1,
      mainImage: analytics,
      mainImageAlt: "analyze image",
      title: "E-commerce Analytics",
      iconImage: analytics_icon,
      iconImageAlt: "analyze icon",
      content:
        " A comprehensive dashboard for tracking sales, inventory, and customer metrics in real-time. Includes dark mode and export features.",
      tag: ["React", "Typescript", "Tailwind"],
      demo: "https://www.mseprinting.com/",
      code: "https://github.com/sabaPhruidze/mseprint",
    },
    {
      id: 2,
      mainImage: finance_tracker,
      mainImageAlt: "finance tracker image",
      title: "Finance Tracker",
      iconImage: finance_tracker_icon,
      iconImageAlt: "finance tracker icon",
      content:
        " Personal finance management app allowing users to track expenses, set budgets, and visualize spending habits over time.",
      tag: ["Next.js", "Prisma", "PosgreSQL"],
      demo: "https://www.mseprinting.com/",
      code: "https://github.com/sabaPhruidze/mseprint",
    },
    {
      id: 3,
      mainImage: api,
      mainImageAlt: "DevDocs API image",
      title: "DevDocs API",
      iconImage: api_icon,
      iconImageAlt: "DevDocs API icon",
      content:
        " A centralized documentation platform for internal developer tools, featuring search, versioning, and code snippets.",
      tag: ["Vue", "Nuxt", "Algolia"],
      demo: "https://www.mseprinting.com/",
      code: "https://github.com/sabaPhruidze/mseprint",
    },
    {
      id: 4,
      mainImage: threed,
      mainImageAlt: "3D image",
      title: "3D Portfolio",
      iconImage: threed_icon,
      iconImageAlt: "3D icon",
      content:
        "An immersive 3D portfolio experience utilizing WebGL to create interactive environments and showcase creative work.",
      tag: ["Three.js", "WebGL", "GSAP"],
      demo: "https://www.mseprinting.com/",
      code: "https://github.com/sabaPhruidze/mseprint",
    },
  ];
  return (
    <section className="w-full h-650 bg-gray-300 px-10">
      <h2 className="text-4xl font-bold pt-10">Featured Projects</h2>
      <p className="font-semibold text-gray-500 mt-5">
        building digital experiences with clean code and modern design. Here is
        a selection of my recent work across web and mobile.
      </p>
      <div className="flex flex-row flex-wrap gap-3 mt-10">
        {show.map((item) => (
          <button
            key={item}
            className="px-5 py-1 bg-gray-200 text-gray-700 rounded-xl font-semibold"
          >
            {item}
          </button>
        ))}
      </div>
      <Card DATA={DATA} />
    </section>
  );
};

export default Project;
