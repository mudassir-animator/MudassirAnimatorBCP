import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode
    tempoelementid="tempo-124b85a7-4fc6-5b5c-bd40-1173014452f8"
    className="tempo-124b85a7-4fc6-5b5c-bd40-1173014452f8">
    <BrowserRouter
      basename={basename}
      tempoelementid="tempo-4d10ed26-b7ff-5a54-8e98-228249be0155"
      className="tempo-4d10ed26-b7ff-5a54-8e98-228249be0155">
      <App
        tempoelementid="tempo-45ad482f-ec94-568e-a0e1-f0e9e40db295"
        className="tempo-45ad482f-ec94-568e-a0e1-f0e9e40db295" />
    </BrowserRouter>
  </React.StrictMode>,
);
