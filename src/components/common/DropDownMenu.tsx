import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { menuData } from "../../data/Menu";
const DropDownMenu = () => {
  const [value, setValue] = useState<string>(""); // გახსნა/დახურვის კონტროლი

  const closeMenu = () => setValue("");

  return (
    <NavigationMenu.Root
      value={value}
      onValueChange={setValue}
      className="relative"
    >
      <NavigationMenu.List className="m-0 list-none">
        <NavigationMenu.Item value="main">
          <NavigationMenu.Trigger className="h-10 w-10 bg-gray-300 rounded-md flex justify-center items-center outline-none cursor-pointer ">
            <img src={menu} alt="symbol of menu" className="w-5 h-5" />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="p-2 ">
            <ul className="m-0 list-none w-48">
              {menuData.map((item) => (
                <li
                  className={`${item.to === "/" ? "" : "mt-1"}`}
                  key={item.name}
                >
                  <NavigationMenu.Link asChild>
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className="block px-3 py-2 rounded-md font-semibold text-gray-800 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport className="absolute right-0 top-full w-56 rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden" />
    </NavigationMenu.Root>
  );
};

export default DropDownMenu;
