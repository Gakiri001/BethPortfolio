import React, { useState } from "react";
import fashion from "../../data/fashion";
import "./Blog.css";

const FashionCard = ({
  FashionQuestion,
  FashionAnswer,
  i,
  selected,
  toggle,
}) => {
  return (
    <div className="FashionCard">
      <div className="item">
        <div className="title" onClick={() => toggle(i)}>
          <h3>{FashionQuestion}</h3>
          <span> {selected === i ? "-" : "+"} </span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          {FashionAnswer}
        </div>
      </div>
    </div>
  );
};

function Fashion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="BlogWrapper">
      <h1>Fashion and Style Advice</h1>
      {fashion.map((current, i) => (
        <FashionCard
          key={i}
          FashionQuestion={current.FashionQuestion}
          FashionAnswer={current.FashionAnswer}
          i={i}
          selected={selected}
          toggle={toggle}
        />
      ))}
    </div>
  );
}

export default Fashion;
