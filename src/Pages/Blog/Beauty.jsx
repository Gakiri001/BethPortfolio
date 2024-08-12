import React from "react";
import beauty from "../../data/beauty";

const BeautyCard = ({ BeautyQuestion, BeautyAnswer }) => {
  return (
    <div className="BeautyCard">
      <div className="item">
        <div className="title">
          <h2>{BeautyQuestion}</h2>
          <span> + </span>
        </div>
        <div>{BeautyAnswer}</div>
      </div>
    </div>
  );
};

function Beauty() {
  return (
    <div className="BlogWrapper">
      <h1>Beauty and Skincare Tips</h1>
      {beauty.map((current, i) => (
        <BeautyCard
          key={i}
          BeautyQuestion={current.BeautyQuestion}
          BeautyAnswer={current.BeautyAnswer}
        />
      ))}
    </div>
  );
}

export default Beauty;
