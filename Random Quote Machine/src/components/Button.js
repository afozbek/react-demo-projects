import React from "react";
import PropTypes from "prop-types";

import "./Quote.css";

const button = props => {
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

  const href =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=afozbek&text=" +
    encodeURIComponent('"' + props.quote + '" - ' + props.author);

  return (
    <a
      id={props.id}
      href={href}
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

button.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default button;
