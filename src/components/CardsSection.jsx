import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "../styles/CardsSection.css";

const cards = Array(6).fill({
  title: "Lorem ipsum",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
});

const CardsSection = () => {
  return (
    <div className="scroll-section">
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="know-more">
              Know More <FiArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
