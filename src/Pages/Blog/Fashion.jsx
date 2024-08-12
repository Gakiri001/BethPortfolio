import React from "react";
import fashion from "../../data/fashion";
import "./Blog.css";

const FashionCard = ({ FashionQuestion, FashionAnswer }) => {
  return (
    <div className="FashionCard">
      <div className="item">
        <div className="title">
          <h2>{FashionQuestion}</h2>
          <span> + </span>
        </div>
        <div>{FashionAnswer}</div>
      </div>
    </div>
  );
};

function Fashion() {
  return (
    <div className="BlogWrapper">
      <h1>Fashion and Style Advice</h1>
      {fashion.map((current, i) => (
        <FashionCard
          key={i}
          FashionQuestion={current.FashionQuestion}
          FashionAnswer={current.FashionAnswer}
        />
      ))}
    </div>
  );
}

export default Fashion;
