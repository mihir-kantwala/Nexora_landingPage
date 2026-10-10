import React from "react";
import "../../components/Main/Section1.css";
import earthvd from "../../assets/vidoes/earth.mp4";
import logo from "../../assets/images/logo.png";

const Section1 = () => {
  return (
    <section className="sec1 relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full xl:w-[70%] h-full object-contain z-[-1]"
        loop
        muted
        autoPlay
        playsInline
        src={earthvd}
      />

      <div className="container w-full relative text-white mt-10 lg:mt-5 flex flex-col justify-center items-center  xl:justify-center xl:items-end h-full text-center xl:text-right px-4">
        <h2 className="text-5xl max-w-4xl font-bold bg-gradient-to-r  from-blue-500 via-white-500 to-white  text-transparent bg-clip-text">
          Welcome to{" "}
        </h2>
        <h2 className=" animate-pulse text-shadow-2xs bg-gradient-to-r  from-purple-600 to-pink-500   text-transparent bg-clip-text ">
          Nexora.Community
        </h2>
        <h1 className="max-w-5xl">Your Gateway to Decentralized Earning!</h1>

        <p className="text-lg md:text-xl max-w-3xl  mb-4">
          Experience the future of finance with fast, secure, and transparent
          transactions on the Polygon blockchain. Join us to unlock the power of
          decentralized earnings and smart contract technology.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="btn-grad relative inline-block px-6 py-3  font-semibold text-white rounded-xl z-10 overflow-hidden"
          >
            <span className="relative z-20">Login</span>
          </a>

          <a
            href="#"
            className="btn-grad relative inline-block px-6 py-3 font-semibold text-white rounded-xl z-10 overflow-hidden"
          >
            <span className="relative z-20">Sign Up</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
