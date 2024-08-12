import React from "react";
import bts from "../../data/bts";
import "./Blog.css";

const BtsCard = ({ BTSQuestion, BTSAnswer }) => {
  return (
    <div className="BtsCard">
      <div className="item">
        <div className="title">
          <h2>{BTSQuestion}</h2>
          <span> + </span>
        </div>
        <div>{BTSAnswer}</div>
      </div>
    </div>
  );
};

function Bts() {
  return (
    <div className="BlogWrapper">
      <h1>Behind-the-Scenes Experiences</h1>
      {bts.map((current, i) => (
        <BtsCard
          key={i}
          BTSQuestion={current.BTSQuestion}
          BTSAnswer={current.BTSAnswer}
        />
      ))}
    </div>
  );
}

export default Bts;
