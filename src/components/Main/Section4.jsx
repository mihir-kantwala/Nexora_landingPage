import React, { useState } from "react";
import title1img from "../../assets/images/title1img.png";
import title2img from "../../assets/images/title2img.png";
import title3img from "../../assets/images/title3img.png";
import title4img from "../../assets/images/title4img.png";
import title5img from "../../assets/images/title5img.png";

const Section4 = () => {
  const [index, setIndex] = useState(0);

  const advantages = [
    {
      title: "Instant Distribution:",
      para: "Receive immediate rewards directly to your wallet – no waiting, no hassle.",
      image: title1img,
    },
    {
      title: "Autonomous and Immutable",
      para: "Fully powered by smart contracts, reducing human error and ensuring immutable conditions.",
      image: title2img,
    },
    {
      title: "Transparent and Open",
      para: "Complete visibility with an open smart contract code and a transparent transaction history.",
      image: title3img,
    },
    {
      title: "Fully Decentralized",
      para: "Reduced human error and decentralized control with smart contracts.",
      image: title4img,
    },
    {
      title: "Economic Efficiency:",
      para: "Enjoy faster, more cost-effective transactions than traditional blockchain networks.",
      image: title5img,
    },
  ];

  return (
    <section id="advantages" className="py-10 text-white">
      <div className="container mx-auto  px-4">
        <h1 className="text-3xl  text-center mb-8">Advantages</h1>
        <div className="lg:flex justify-center  gap-5 items-center">
          <div className="flex flex-col w-full  lg:max-w-1/2 justify-center gap-6">
            {advantages.map((val, i) => (
              <div
                key={i}
                className={`cursor-pointer px-3 py-2 text-center rounded-md transition-all min-w-60 duration-300 ${
                  index === i
                    ? "bg-blue-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setIndex(i === index ? null : i)}
              >
                {val.title}
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden mt-6  rounded-md text-center text-lg ${
              index !== null
                ? "max-h-[600px] p-6 opacity-100"
                : "max-h-0 p-0 opacity-0"
            }`}
          >
            {index !== null && (
              <>
                <img
                  src={advantages[index].image}
                  className="max-h-70 mx-auto mb-4 transition-opacity duration-500"
                  alt=""
                />
                <p>{advantages[index].para}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
