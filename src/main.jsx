import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { cacheRtl } from "./config/RtlCache";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <CssBaseline />
      <App />
    </CacheProvider>
  </React.StrictMode>
);
