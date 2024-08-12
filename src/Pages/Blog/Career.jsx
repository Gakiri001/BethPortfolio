import React, { useState } from "react";
import career from "../../data/career";
import "./Blog.css";

const Careercard = ({ CareerQuestion, CareerAnswer, i, selected, toggle }) => {
  return (
    <div className="Careercard">
      <div className="item">
        <div className="title" onClick={() => toggle(i)}>
          <h3>{CareerQuestion}</h3>
          <span> {selected === i ? "-" : "+"} </span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          {CareerAnswer}
        </div>
      </div>
    </div>
  );
};

function Career() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="BlogWrapper">
      <h1>Career and Industry Insights</h1>
      {career.map((current, i) => (
        <Careercard
          key={i}
          CareerQuestion={current.CareerQuestion}
          CareerAnswer={current.CareerAnswer}
          i={i}
          selected={selected}
          toggle={toggle}
        />
      ))}
    </div>
  );
}

export default Career;
