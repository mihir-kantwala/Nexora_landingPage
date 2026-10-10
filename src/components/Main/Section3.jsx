import React from "react";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.gif";
import card3 from "../../assets/images/card3.png";
import "../../components/Main/Section3.css";

const Section3 = () => {
  return (
    <section id="explore">
      <div  className="container " >
        <h1 className="text-center mb-8">Exploring Nexora.Community</h1>
        <div className="grid grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        <div className="relative border-2 rounded-xl  min-h-90 flex flex-col justify-end items-center ">
            <img
              src={card1}
             className="plantrotate z-[-1]  absolute m-auto top-1/2 left-1/2 -translate-1/2 w-full  max-w-85 h-auto"
              alt=""
            />
            <p className="bg-white/10 backdrop-blur-md ease-in-out rounded-b-xl p-3 ">
              Delve into the world of Ape.Community and discover a network that
              redefines decentralized earning.
            </p>
          </div>
          <div className="relative border-2 rounded-xl  min-h-90 flex flex-col justify-end items-center ">
            <img
              src={card2}
                  className="plantrotate z-[-1]  absolute m-auto top-1/2 left-1/2 -translate-1/2 w-full  max-w-85 h-auto"
              alt=""
            />
            
           <p className="bg-white/10 backdrop-blur-md ease-in-out rounded-b-xl p-3">
              Our platform harnesses the collective wisdom of our community,
              offering instant reward distribution and an open, transparent
              ledger.
            </p>
          </div>

       <div className="relative border-2 rounded-xl  min-h-90 flex flex-col justify-end items-center ">
            <img
              src={card3}
                className="plantrotate z-[-1]  absolute m-auto top-1/2 left-1/2 -translate-1/2 w-full  max-w-85 h-auto"
              alt=""
            />
           <p className="bg-white/10 backdrop-blur-md ease-in-out rounded-b-xl p-3">
              With Ape.Community, everything is transparent, fast, and always on
              the go, ensuring a seamless experience for all our users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
