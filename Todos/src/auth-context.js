import React from "react";

const authContext = React.createContext({ status: false, login: () => {} });

export default authContext;
