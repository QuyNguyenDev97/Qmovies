import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="https://raw.githubusercontent.com/trananhtuat/react-movie/main/src/assets/tmovie.png"
        alt="logo"
        className="w-[50px] h-[50px]"
      />
      <p className="text-2xl">Qmovies</p>
    </div>
  );
};

export default Logo;
