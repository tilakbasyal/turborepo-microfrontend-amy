import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  WelcomePage,
  HomePage,
  ServicesPage,
  AboutPage,
  GalleryPage,
  ContactPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
