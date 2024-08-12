import React, { useState } from "react";
import bts from "../../data/bts";
import "./Blog.css";

const BtsCard = ({ BTSQuestion, BTSAnswer, i, selected, toggle }) => {
  return (
    <div className="BtsCard">
      <div className="item">
        <div className="title" onClick={() => toggle(i)}>
          <h3>{BTSQuestion}</h3>
          <span> {selected === i ? "-" : "+"} </span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          {BTSAnswer}
        </div>
      </div>
    </div>
  );
};

function Bts() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="BlogWrapper">
      <h1>Behind-the-Scenes Experiences</h1>
      {bts.map((current, i) => (
        <BtsCard
          key={i}
          BTSQuestion={current.BTSQuestion}
          BTSAnswer={current.BTSAnswer}
          i={i}
          selected={selected}
          toggle={toggle}
        />
      ))}
    </div>
  );
}

export default Bts;
