import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import useDarkMode from "../../useDarkMode";
const NavBar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px"}
            color={"#e9c46a"}
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color={"#e9c46a"}
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className=" md:flex ml-auto">
        {openMenu && isMobile ? (
          <AiOutlineClose
            size={"28px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <FiMenu
            size={"28px"}
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          // render ra menu khi Ở kích thước hơn 500
          <>
            <li className="menu-hover">
              <a href="#!">Features</a>
            </li>
            <li className="menu-hover">
              <a href="#!">Menu</a>
            </li>
            <li className="menu-hover">
              <a href="#!">Our Story</a>
            </li>
            <li className="menu-hover ml-28">
              <a href="#!">Contact</a>
            </li>
          </>
        )}
        {openMenu && (
          <div
            className="fixed text-black right-8 bg-white font-semibold rounded-xl shadow-2xl w-44 
        z-30 transition"
          >
            <li className="p-4 border-[#f5efef] ">
              <a href="#!">Features</a>
            </li>
            <li className="p-4 border-[#f5efef] ">
              <a href="#!">Menu</a>
            </li>
            <li className="p-4 border-[#f5efef] ">
              <a href="#!">Our Story</a>
            </li>
            <li className="p-4 border-[#f5efef] ">
              <a href="#!">Contact</a>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
