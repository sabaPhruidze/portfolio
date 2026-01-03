import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const DropDownMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
            <img src={menu} alt="symbol of menu" className="w-5 h-5" />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-2.5 p-5.5 sm:w-150 sm:grid-flow-col sm:grid-rows-3">
              <NavigationMenu.Link asChild>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </NavigationMenu.Link>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};

export default DropDownMenu;
