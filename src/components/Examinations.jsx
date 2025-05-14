import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../styles/Examinations.css";

const exams = [
  {
    date: "02th October 2014",
    level: "Level 1 exam",
    details: [],
  },
  {
    date: "Nov-Dec 2016",
    level: "Level 2",
    details: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    date: "Ongoing this year",
    level: "Level 3 (Grad)",
    details: [],
  },
];

const Examinations = () => (
  <section className="upcoming-examinations">
    <div className="exams-left">
      <h2>
        Upcoming
        <br />
        Examinations
      </h2>
      <p>
        Enquire about the examination &amp;
        <br />
        register for the exams
      </p>
    </div>
    <div className="exams-right">
      {exams.map((exam, idx) => (
        <div className="exam-card" key={idx}>
          <FaRegCalendarAlt className="exam-icon" />
          <div>
            <div className="exam-date">{exam.date}</div>
            <div className="exam-level">{exam.level}</div>
            {exam.details.length > 0 && (
              <ul className="exam-details">
                {exam.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Examinations;
