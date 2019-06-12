import React from "react";

const markdownContext = React.createContext({
  markdown: "Furkan",
  changeMarkdown: e => {}
});

export default markdownContext;
