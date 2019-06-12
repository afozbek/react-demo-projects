import React from "react";

import "./Preview.css";

const marked = require("marked");

let renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  var link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a", "<a target='_blank' ");
};
marked.setOptions({
  renderer: renderer
});

const preview = props => {
  return (
    <div className="preview-container">
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.value) }}
      />
    </div>
  );
};

export default preview;
