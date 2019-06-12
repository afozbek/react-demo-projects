import React from "react";

const Author = props => {
  return (
    <div id="author" className="author">
      <p>
        Made with{" "}
        <span role="img" aria-label="Heart">
          💗
        </span>{" "}
        by
      </p>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
    </div>
  );
};

export default Author;
