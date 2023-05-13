import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="font-bold text-3xl">SEO LOGO</h1>
        <p className="text-sm tracking-wider">Lorem ipsum dolor sit.</p>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button className="font-medium text-md">Home</button>
        <button className="font-medium text-md">Pages</button>
        <button className="font-medium text-md">Research</button>
        <button className="font-medium text-md">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
