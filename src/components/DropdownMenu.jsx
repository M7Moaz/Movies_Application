"use client";
import { ForwardIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

const DropdownMenu = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const menu = useRef(null);

  const openMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleClickOnChild = () => {
    setToggle(false);
  };

  return (
    <div className="relative z-20 rounded-lg" id="dropdownMenu" ref={menu}>
      <button
        type="button"
        className="flex justify-between items-center w-full px-3 py-3 text-sm text-purple-900 hover:bg-purple-900 hover:text-white transition-colors focus:outline-none"
        onClick={openMenu}
      >
        <span className="font-medium">أفلام</span>
        <ForwardIcon
          className={`w-4 h-4 mr-3 transition-transform ${
            toggle && "rotate-90"
          }`}
        />
      </button>

      {toggle && (
        <div className="absolute hidden md:block right-0 w-40 mt-1 bg-white rounded-md shadow-lg transition duration-300">
          <div
            onClick={handleClickOnChild}
            className="flex flex-col text-purple-900 font-medium"
          >
            {children}
          </div>
        </div>
      )}
      {toggle && (
        <div className="absolute w-full block md:hidden mt-1 bg-white shadow-lg transition duration-300">
          <div
            onClick={handleClickOnChild}
            className="flex flex-col text-purple-900 font-medium"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
