import React from "react";
import ReactDOM from "react-dom";

import Calculator from "./Calculator";
import "./index.css";

const projectName = "javaScript-calculator";
localStorage.setItem("project-name", projectName);

ReactDOM.render(<Calculator />, document.getElementById("root"));
