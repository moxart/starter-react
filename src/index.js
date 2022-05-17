import React from "react";
import ReactDOM from 'react-dom/client';

import "./assets/scss/main.scss";

import App from "./app/App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);

module.hot.accept();
