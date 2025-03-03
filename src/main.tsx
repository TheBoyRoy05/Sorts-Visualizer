import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SortProvider } from "./Utils/SortContext.tsx";
import "./Styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SortProvider>
      <App />
    </SortProvider>
  </React.StrictMode>
);
