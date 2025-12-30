import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import menu from "../../assets/menu.png";
const Header = () => {
  return (
    <div className="w-screen h-20 flex flex-row bg-yellow-300 items-center px-5 ">
      <section id="left-part" className="flex flex-row">
        <div className="w-10 h-10 bg-blue-700 rounded-md flex justify-center items-center">
          <p className="text-white font-extrabold">&lt;&gt;</p>
        </div>
        <h2>SabaDev</h2>
      </section>
      <section id="theme-language-toggle">
        <img src={moon} alt="symbol of moon" className="w-4 h-4" />
        <p>EN</p>
        <p>KA</p>
      </section>
      <section>
        <img src={menu} alt="symbol of menu" className="w-5 h-5" />
      </section>
    </div>
  );
};

export default Header;
