import moon from "../../assets/moon.png";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import { menuData } from "../../data/Menu";
const Header = () => {
  return (
    <header className="w-full h-20 flex flex-row bg-white items-center px-5 justify-between min-w-0">
      <section id="left-part" className="flex flex-row">
        <Link to="/">
          <div className="w-10 h-10 bg-blue-700 rounded-md flex justify-center items-center shadow-md shadow-blue-200">
            <p className="text-white font-extrabold scale-y-[1.5] -translate-y-0.5">
              &lt;&gt;
            </p>
          </div>
        </Link>
        <h2 className="h-10 ml-3 translate-y-1.5 font-bold text-lg">SabaDev</h2>
      </section>
      <section>
        <ul className="flex flex-row overflow-hidden min-w-0">
          {menuData.map((item) => (
            <li
              key={item.name}
              className={
                item.to === "/"
                  ? "hidden"
                  : item.to === "/about" ||
                      item.to === "/projects" ||
                      item.to === "/skills"
                    ? "hidden sm:block"
                    : item.to === "/contacts"
                      ? "hidden md:block"
                      : undefined
              }
            >
              <nav>
                <Link
                  to={item.to}
                  className="block px-3 py-2 rounded-md font-semibold text-gray-800 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </nav>
            </li>
          ))}
        </ul>
      </section>
      <section
        id="theme-language-toggle"
        className="flex flex-row w-43 justify-between"
      >
        <div className="h-10 w-30 bg-gray-300 flex flex-row rounded-md justify-around items-center px-2">
          <img src={moon} alt="symbol of moon" className="w-4 h-4" />
          <div className="w-px h-5 bg-gray-400" />
          <p className="font-bold">EN</p>
          <div className="w-px h-5 bg-gray-400" />
          <p className="text-gray-500 font-bold">KA</p>
        </div>
        <DropDownMenu />
      </section>
    </header>
  );
};

export default Header;
