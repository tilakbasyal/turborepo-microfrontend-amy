import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <p>home</p>,
      },
      {
        path: "/services",
        element: <p>services</p>,
      },
      {
        path: "/about",
        element: <p>about</p>,
      },
      {
        path: "/gallery",
        element: <p>gallery</p>,
      },
      {
        path: "/contact",
        element: <p>contact</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
