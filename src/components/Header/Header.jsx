import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "../../components/Header/Header.css";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <header className={`fixed backdrop-blur-xs top-0 left-0 z-999 w-full ${menuOpen && "bg-black"}`}>
      <div className="container">
        <div className="flex justify-between items-center w-full">
          <div className="logo flex justify-between items-center max-w-[100px]  ">
            <img src={logo} className="w-full h-full inline-block animate-pulse"  alt="" /> <span >Nexora</span>
          </div>

          <div className="hidden nav lg:block">
            <ul className="flex justify-between gap-10 items-center">
              <li className="cursor-pointer overflow-hidden">
                <a href="#about" className="px-4 py-2">About</a>
              </li>
              <li className="cursor-pointer overflow-hidden">
                <a href="#explore" className="px-4 py-2">Explore</a>
              </li>
              <li className="cursor-pointer overflow-hidden">
                <a href="#advantages" className="px-4 py-2">Advantages</a>
              </li>
              <li className="cursor-pointer overflow-hidden">
                <a href="#faq" className="px-4 py-2">Faq</a>
              </li>
            </ul>
          </div>

        
          <div
            className={`lg:hidden fixed top-20 left-0 w-full h-[100vh] bg-black z-50 transform transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <ul className="flex justify-between text-[30px] flex-col py-10 px-4 gap-5 items-center w-full">
              <li className="cursor-pointer w-full text-center overflow-hidden">
                <a href="#about" className="px-4 py-2 inline-block w-full">About</a>
              </li>
              <li className="cursor-pointer w-full text-center overflow-hidden">
                <a href="#explore" className="px-4 py-2 inline-block w-full">Explore</a>
              </li>
              <li className="cursor-pointer w-full text-center overflow-hidden">
                <a href="#advantages" className="px-4 py-2 inline-block w-full">Advantages</a>
              </li>
              <li className="cursor-pointer w-full text-center overflow-hidden">
                <a href="#faq" className="px-4 py-2 inline-block w-full">Faq</a>
              </li>
            </ul>
          </div>

        
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => {
              setmenuOpen(!menuOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 6h10" />
              <path d="M4 12h16" />
              <path d="M7 12h13" />
              <path d="M4 18h10" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
