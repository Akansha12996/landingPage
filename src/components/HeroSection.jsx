import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/HeroSection.css";
import image from "../assets/hero1.png";
const slides = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd",
    button: "Know More",
    image: image,
  },
  {
    title: "Second Slide",
    text: "This is the second section with different information. You can add more slides as needed.",
    button: "Discover",
    image: image,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div className="slider-section" {...handlers}>
      <div className="slider-content">
        <div className="slider-text">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].text}</p>
          <button className="slider-btn">{slides[current].button} &gt;</button>
        </div>
        <div className="slider-image">
          <img src={slides[current].image} alt={slides[current].title} />
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
