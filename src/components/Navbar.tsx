import { MenuIcon, RadarIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { config, NavbarItem } from "../config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex flex-wrap items-center justify-between mx-auto py-4">
      <NavLink to={"/"} className="flex items-center space-x-3">
        <RadarIcon className="text-primary" />
        <p className="text-2xl font-semibold">{config.title}</p>
      </NavLink>
      <MenuIcon
        onClick={toggleNavbar}
        type="button"
        className="hover:text-primary-muted md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm"
      />
      <nav
        className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
      >
        <ul className="font-medium flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
          {config.navbarItems.map((item: NavbarItem) => {
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="hover:text-primary block py-2 px-3 md:bg-transparent md:p-0"
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
