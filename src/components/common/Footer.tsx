import github from "../../assets/footer/github.png";
import linkedin from "../../assets/footer/linkedin.png";
const Footer = () => {
  return (
    <footer className="bg-white w-full h-50 flex flex-col justify-center items-center">
      <h2 className="font-bold text-xl">SabaDev</h2>
      <p className="text-gray-500 font-semibold my-2">
        © 2025 Personal Portfolio. All rights reserved.
      </p>
      <ul className="w-full h-10 flex flex-row justify-center items-center">
        <li>
          <a
            href="https://github.com/sabaPhruidze?tab=overview&from=2026-01-01&to=2026-01-02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github icon" className="w-8 h-8 mr-3" />
          </a>
        </li>
        <li>
          <a
            href="https://ge.linkedin.com/in/saba-phruidze-45b583266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin icon" className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
