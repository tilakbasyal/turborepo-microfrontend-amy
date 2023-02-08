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
import { Provider, rootStore } from "./models/Root";

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
    <Provider value={rootStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
