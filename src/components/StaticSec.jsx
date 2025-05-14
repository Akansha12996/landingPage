import React from "react";
import "../styles/StaticSec.css";

const stats = [
  {
    label: "Lorem ipsum",
    value: "123+",
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    label: "Lorem ipsum",
    value: "12+",
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    label: "Lorem ipsum",
    value: "12+",
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
  },
  {
    label: "Lorem ipsum",
    value: "123",
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
  },
];
const StaticSec = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaticSec;
