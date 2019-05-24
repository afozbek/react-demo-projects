import React from "react";
import "./Quote.css";

const button = props => {
  console.log(props.isButton);
  if (props.isButton) {
    return (
      <button
        id={props.id}
        className="button"
        onClick={props.clicked}
        style={{ color: "white", backgroundColor: props.backgroundColor }}
      >
        {props.children}
      </button>
    );
  }
  return (
    <a
      href={props.href}
      className="button"
      title={props.title}
      rel="noopener noreferrer"
      target="_blank"
      style={{ color: "white", backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </a>
  );
};

export default button;
