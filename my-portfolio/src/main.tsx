import React from "react";
import { createRoot } from "react-dom/client";   
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
