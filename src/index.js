import React from "react";
import ReactDom from "react-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

import App from "./app/App";

ReactDom.render(<App />, document.getElementById("root"));

module.hot.accept();
