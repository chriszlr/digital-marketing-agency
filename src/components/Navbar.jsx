import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="font-bold text-3xl">SEO LOGO</h1>
        <p className="text-sm tracking-wider">Lorem ipsum dolor sit.</p>
      </div>

      <div className="hidden sm:flex justify-center items-center gap-4">
        <button className="font-medium text-md hover:text-neutral-500 duration-300 cursor-pointer">
          Home
        </button>
        <button className="font-medium text-md hover:text-neutral-500 duration-300 cursor-pointer">
          Pages
        </button>
        <button className="font-medium text-md hover:text-neutral-500 duration-300 cursor-pointer">
          Research
        </button>
        <button className="font-medium text-md hover:text-neutral-500 duration-300 cursor-pointer">
          Contact
        </button>
      </div>

      <div
        className="flex sm:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu className="text-2xl" />
      </div>

      {/* mobile menu */}

      {/* overlay */}
      <div
        className={
          isOpen
            ? "bg-black/80 fixed w-full h-screen z-10 top-0 right-0 duration-700"
            : "bg-black/80 fixed w-full h-screen z-10 top-0 right-[-100%] duration-700"
        }
      ></div>

      {/* side drawer menu */}
      <div
        className={
          isOpen
            ? "fixed top-0 right-0 w-[250px] h-screen bg-white z-10 duration-700 text-black"
            : "fixed top-0 right-[-250px] w-[250px] h-screen bg-white z-10 duration-700 text-black"
        }
      >
        <AiOutlineClose
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4 font-bold">
          SEO <span className="text-[#3a1387]">LOGO</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-neutral-300 text-xl">
            <li className="hover:text-neutral-500 duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-neutral-500 duration-300 cursor-pointer">
              Pages
            </li>
            <li className="hover:text-neutral-500 duration-300 cursor-pointer">
              Research
            </li>
            <li className="hover:text-neutral-500 duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
