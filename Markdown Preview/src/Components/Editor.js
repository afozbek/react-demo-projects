import React from "react";

import "./Editor.css";

const Editor = props => {
  return (
    <div className="editor-container">
      <textarea
        name="editor"
        id="editor"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default Editor;
