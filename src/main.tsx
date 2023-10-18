import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/MainPage/MainPage";

import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
