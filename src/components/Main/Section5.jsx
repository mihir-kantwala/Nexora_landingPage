import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Main/Section5.css";
import astro1 from "../../assets/images/astro1.png";
import astro2 from "../../assets/images/astro2.png";
import astro3 from "../../assets/images/astro3.png";
import astro4 from "../../assets/images/astro4.png";
import astro5 from "../../assets/images/astro5.png";
import astrovid1 from "../../assets/images/astrovid1.mp4";
import astrovid2 from "../../assets/images/astrovid2.mp4";
import astrovid3 from "../../assets/images/astrovid3.mp4";
import astrovid4 from "../../assets/images/astrovid4.mp4";
import astrovid5 from "../../assets/images/astrovid5.mp4";

const Section5 = () => {
  const advantages = [
    {
      video: astrovid1,
      images: astro1,
      title: "#1 Smoky Cyber",
    },
    {
      video: astrovid2,
      images: astro2,
      title: "#2 Cyber Scape",
    },
    {
      video: astrovid3,
      images: astro3,
      title: "#3 Alpha Aura",
    },
    {
      video: astrovid4,
      images: astro4,
      title: "#4 Cloudy Ape",
    },
    {
      video: astrovid5,
      images: astro5,
      title: "#5 Nova Nebula",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
      autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-8">ASTRO NFT</h1>
        <div className="gap-5 ">
          <Slider {...settings}>
            {advantages.map((val, i) => (
              <>
                <div className="px-5" key={i}>
                  <div className=" border rounded-2xl max-h-96 overflow-hidden relative">
                    <video
                      src={val.video}
                      loop
                      muted
                      autoPlay
                      className=" opacity-50 z-[-1] pointer-events-auto"
                      playsInline
                    ></video>
                    <img
                      src={val.images}
                      className="absolute astros top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  h-60  "
                      alt=""
                    />
                  </div>
                </div>
                <h3 className="text-center text-2xl mt-5">{val.title}</h3>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Section5;
