import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[100px] bg-slate-900 fixed top-0 left-0 right-0 z-[99] flex items-center justify-between p-10  mb-5 text-white header">
      <div>
        <NavLink to="/">
          <div className="flex items-center gap-2">
            <img
              src="https://raw.githubusercontent.com/trananhtuat/react-movie/main/src/assets/tmovie.png"
              alt="logo"
              className="sm:w-10 sm:h-10 w-[50px] h-[50px]"
            />
            <p className="text-xl sm:text-xl">Qmovies</p>
          </div>
        </NavLink>
      </div>
      <div className="flex gap-10 sm:gap-5">
        <div className="text-xl font-bold ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Home
          </NavLink>
        </div>
        <div className="text-xl font-bold `-">
          <NavLink
            to="/Movies"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Movies
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
