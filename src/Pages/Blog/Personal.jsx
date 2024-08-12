import React from "react";
import personal from "../../data/personal";

const PersonalCard = ({ PersonalQuestion, PersonalAnswer }) => {
  return (
    <div className="PersonalCard">
      <div className="item">
        <div className="title">
          <h2>{PersonalQuestion}</h2>
          <span> + </span>
        </div>
        <div>{PersonalAnswer}</div>
      </div>
    </div>
  );
};

function Personal() {
  return (
    <div className="BlogWrapper">
      <h1>Personal Life and Hobbies</h1>
      {personal.map((current, i) => (
        <PersonalCard
          key={i}
          PersonalQuestion={current.PersonalQuestion}
          PersonalAnswer={current.PersonalAnswer}
        />
      ))}
    </div>
  );
}

export default Personal;
