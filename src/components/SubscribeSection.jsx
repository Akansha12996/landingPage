import React from "react";
import "../styles/SubscribeSection.css";
import image from "../assets/subscribe.png";
const SubscribeSection = () => (
  <section className="subscribe-section">
    <div className="subscribe-left">
      <h2>Subscribe</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter your Email Address" required />
        <button type="submit">
          Subscribe Now <span className="arrow">&#9654;</span>
        </button>
      </form>
    </div>
    <div className="subscribe-right">
      <img src={image} alt="Subscribe Illustration" className="subscribe-img" />
    </div>
  </section>
);

export default SubscribeSection;
