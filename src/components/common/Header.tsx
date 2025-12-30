import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import menu from "../../assets/menu.png";
const Header = () => {
  return (
    <div className="w-screen h-20 flex flex-row bg-white items-center px-5 justify-between">
      <section id="left-part" className="flex flex-row">
        <div className="w-10 h-10 bg-blue-700 rounded-md flex justify-center items-center shadow-md shadow-blue-200">
          <p className="text-white font-extrabold scale-y-[1.5] translate-y-[-2px]">
            &lt;&gt;
          </p>
        </div>
        <h2 className="h-10 ml-3 translate-y-1.5 font-bold text-lg">SabaDev</h2>
      </section>
      <section
        id="theme-language-toggle"
        className="flex flex-row w-43 justify-between"
      >
        <div className="h-10 w-30 bg-gray-300 flex flex-row rounded-md justify-around items-center px-2">
          <img src={moon} alt="symbol of moon" className="w-4 h-4" />
          <div className="w-0.25 h-5 bg-gray-400" />
          <p className="font-bold">EN</p>
          <div className="w-0.25 h-5 bg-gray-400" />
          <p>KA</p>
        </div>
        <div className="h-10 w-10 bg-gray-300 rounded-md flex justify-center items-center">
          <img src={menu} alt="symbol of menu" className="w-5 h-5 " />
        </div>
      </section>
    </div>
  );
};

export default Header;
