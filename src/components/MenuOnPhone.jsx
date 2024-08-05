"use client";
import Search from "./Search";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ListOfMovies from "./ListOfMovies";
import { useState } from "react";

const MenuOnPhone = ({ links }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative z-50 py-1 flex md:hidden justify-between items-center gap-x-3 flex-row-reverse px-3">
      <h2 className="font-bold text-purple-800 hidden md:block">لوغو</h2>
      <Search />
      <span
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <Bars3Icon className="w-10 h-10 text-purple-900 cursor-pointer" />
      </span>
      {toggle && (
        <ul className="absolute flex flex-col right-4 top-9 bg-white w-52">
          {links.map((link, idx) => (
            <li key={idx} className="w-full">
              <Link
                className="font-medium w-full block px-3 py-3 text-sm text-purple-900 hover:bg-purple-900 hover:text-white transition-colors"
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>{<ListOfMovies />}</li>
        </ul>
      )}
    </div>
  );
};

export default MenuOnPhone;
