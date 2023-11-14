import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed w-full py-2 px-3 md:px-[120px]">
      <nav className="w-full flex justify-between items-center bg-primary bg-opacity-20 backdrop-blur-xl rounded-[20px] py-5 px-5 md:px-10">
        <div>
          <Link
            to="/"
            className="text-[#461212] flex items-center justify-center gap-2 text-lg font-bold"
          >
            <i class="fa-solid fa-bowl-rice"></i>
            <span className="hidden md:block">Recipe Book</span>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-[#461212] flex items-center justify-center gap-1 text-sm md:text-lg font-normal hover:font-semibold transition-all duration-75"
          >
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>
          <Link
            to="/add"
            className="text-[#461212] flex items-center justify-center gap-1 text-sm md:text-lg font-normal hover:font-semibold transition-all duration-75"
          >
            <i class="fa-solid fa-plus"></i>
            <span>Add Recipe</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
