import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section6 = () => {
  const [faqOpen, setfaqOpen] = useState(null);

  function handleFaq(i) {
    setfaqOpen(faqOpen === i ? null : i);
  }

  const advantages = [
    {
      title: "1. What is Nexora.Community?",
      para: "Nexora.Community is a decentralized networking platform on the Polygon chain, leveraging smart contracts to provide a secure and efficient earning environment.",
    },
    {
      title: "2. How does Nexora.Community ensure fairness and transparency?",
      para: "Ape.Community's smart contract code is open for public viewing, ensuring transparent operations and a clear view of all transactions.",
    },
    {
      title: "3. Are there any hidden fees with Nexora.Community?",
      para: "No, Nexora.Community operates with complete transparency and does not charge any hidden fees. The contract balance is always zero, reflecting our commitment to fairness.",
    },
    {
      title: "4. How does the reward distribution work on Nexora.Community?",
      para: "Rewards on Nexora.Community are distributed instantly and directly into users' decentralized wallets, eliminating the need for manual claims.",
    },
    {
      title:
        "5. What makes Nexora.Community different from other decentralized platforms?",
      para: "Nexora.Community stands out due to its immediate reward system, autonomous smart contract technology, and commitment to a fully transparent and equitable platform for all users.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="faq">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl  text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="">
          {advantages.map((val, i) => (
            <div
              className="mb-5 bg-white/10 py-3 cursor-pointer px-8 rounded-lg "
              onClick={() => {
                handleFaq(i);
              }}
            >
              <div className="flex justify-between items-center ">
                <p className="">{val.title}</p>
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
                  className="icon icon-tabler icons-tabler-outline min-w-6  icon-tabler-octagon-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-linear ${
                  faqOpen === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="mt-3"> {val.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
