import React from "react";

const Footer = () => {
  return (
    <section className="border-t-1 bg-gradient-to-r from-white/20 via-white/10 to-black ">
      <div className="container flex flex-col justify-center items-center gap-5">
        <div className="">
          <p>© 2024 Ape.Community. All rights reserved</p>
        </div>
        <div className="">
          <ul className=" flex justify-content-center lg:justify-around gap-5">
            <li className="transition-all duration-300 ease-in-out hover:scale-110 group">
              <a href="#">
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
                  className="icon icon-tabler icons-tabler-outline group-hover:text-pink-400 transition-colors duration-300 icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
              </a>
            </li>
            <li className="group transition-all duration-300 ease-in-out">
              <a href="#">
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
                  className="icon icon-tabler icons-tabler-outline group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110 icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
            </li>
          <li className="transition-all duration-300 ease-in-out hover:scale-110 group ">
  <a href="#" >
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
      className="group-hover:text-blue-400 transition-colors duration-300"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </svg>
  </a>
</li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
