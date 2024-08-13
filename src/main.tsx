import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ApiSlice } from "./utils/ApiSlice.ts";

createRoot(document.getElementById("root")!).render(
  <ApiProvider api={ApiSlice}>
    <App />
  </ApiProvider>
);
