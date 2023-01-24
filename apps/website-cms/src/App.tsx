import { Outlet } from "react-router-dom";
import { AmyLayout } from "ui";

import reactLogo from "./assets/react.svg";
import "./App.css";

import { menuItems } from "./constants";

function App() {
  return (
    <AmyLayout menuItems={menuItems}>
      <Outlet />
    </AmyLayout>
  );
}

export default App;
