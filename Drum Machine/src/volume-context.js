import React from "react";

const volumeContext = React.createContext({
  volume: null,
  volumeChangeHander: () => {}
});

export default volumeContext;
