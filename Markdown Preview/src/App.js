import React, { useState } from "react";

import "./App.css";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";

const App = props => {
  let STR =
    "# Header\n\n" +
    "## Sub Header\n\n" +
    "- List Item 1\n- List Item 2\n\n" +
    "[A Link](https://github.com/afozbek)" +
    "\n\n```\nfunction(){console.log('Hello')}\n```\n\n" +
    "`<div>Inline Code</div>`\n\n" +
    "> **Blackquote**\n\n" +
    "![React Logo w/ Text](https://goo.gl/Umyytc)";
  const [change, setChange] = useState(STR);

  const handleChange = e => {
    setChange(e.target.value);
  };

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>My MarkDown Previewer</h1>
      <div className="root-container">
        <Editor value={change} handleChange={handleChange} />
        <Preview value={change} />
      </div>
    </React.Fragment>
  );
};

export default App;
