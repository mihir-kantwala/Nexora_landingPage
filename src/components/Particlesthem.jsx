import React, { useEffect, useRef } from "react";
import star from "../assets/images/star.mp4";

const Particlesthem = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 160, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 2, random: true },
        size: { value: 1, random: true },
        line_linked: { enable: false },
        move: { direction: "bottom", speed: 0.2 },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "bubble" },
          onclick: { enable: true, mode: "repulse" },
        },
        modes: {
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0 },
          repulse: { distance: 400, duration: 4 },
        },
      },
    });
  }, []);


  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <div className="overflow-hidden">
        <video
          ref={videoRef}
          src={star}
          playsInline
          muted
          className="ml-auto rotate-45"
        ></video>
      </div>
    </div>
  );
};

export default Particlesthem;
