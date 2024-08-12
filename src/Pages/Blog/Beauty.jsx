import React, { useState } from "react";
import beauty from "../../data/beauty";
import "./Blog.css";

const BeautyCard = ({ BeautyQuestion, BeautyAnswer, i, selected, toggle }) => {
  return (
    <div className="BeautyCard">
      <div className="item">
        <div className="title" onClick={() => toggle(i)}>
          <h3>{BeautyQuestion}</h3>
          <span> {selected === i ? "-" : "+"} </span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          {BeautyAnswer}
        </div>
      </div>
    </div>
  );
};

function Beauty() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="BlogWrapper">
      <h1>Beauty and Skincare Tips</h1>
      {beauty.map((current, i) => (
        <BeautyCard
          key={i}
          BeautyQuestion={current.BeautyQuestion}
          BeautyAnswer={current.BeautyAnswer}
          i={i}
          selected={selected}
          toggle={toggle}
        />
      ))}
    </div>
  );
}

export default Beauty;
