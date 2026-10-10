import React from "react";
import logo from "../../assets/images/logo.png";
import mars from "../../assets/vidoes/mars.mp4";
import satellite from "../../assets/images/satellite.png";
import setedastronaut from "../../assets/images/setedastronaut.png"
import "../../components/Main/Section2.css"


const Section2 = () => {
  return (
    <section id="about" className="relative w-full  overflow-hidden" >

      <div  className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
    
        <div className="lg:w-1/2 text-center  pt-10 lg:text-left">
          <h1 className="text-4xl md:text-5xl  relative mb-8 text-gradient bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            About Nexora.Community
          </h1>
      
          <p className="mb-4 text-lg leading-relaxed">
            Ape.Community is a trailblazing decentralized platform built on the
            Polygon network. It provides users with a transparent, efficient, and
            fair way to earn within the crypto ecosystem.
          </p>
          <p className="text-lg leading-relaxed">
            Powered by smart contracts, the platform offers lightning-fast,
            low-cost transactions. With no slot deadlines, unlimited repeats, and
            limited positions, it fosters a fully autonomous ecosystem free from
            central authority.
          </p>
        </div>

      
        <div className="lg:w-1/2 flex justify-center relative">
        <div className="max-w-96 ">
          <img
            src={satellite}
            alt="Ape.Community Logo"
            className="w-full h-auto drop-shadow-2xl"
          />
              <img src={setedastronaut} className="max-w-30 h-auto setedastronaut absolute left-0 bottom-0  " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
