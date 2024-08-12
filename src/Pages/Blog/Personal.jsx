import React, { useState } from "react";
import personal from "../../data/personal";
import "./Blog.css";

const PersonalCard = ({
  PersonalQuestion,
  PersonalAnswer,
  i,
  selected,
  toggle,
}) => {
  return (
    <div className="PersonalCard">
      <div className="item">
        <div className="title" onClick={() => toggle(i)}>
          <h3>{PersonalQuestion}</h3>
          <span> {selected === i ? "-" : "+"} </span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          {PersonalAnswer}
        </div>
      </div>
    </div>
  );
};

function Personal() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="BlogWrapper">
      <h1>Personal Life and Hobbies</h1>
      {personal.map((current, i) => (
        <PersonalCard
          key={i}
          PersonalQuestion={current.PersonalQuestion}
          PersonalAnswer={current.PersonalAnswer}
          i={i}
          selected={selected}
          toggle={toggle}
        />
      ))}
    </div>
  );
}

export default Personal;
