import { Outlet } from "react-router-dom";
import { AmyLayout } from "ui";

import reactLogo from "./assets/react.svg";
import "./App.css";

import { menuItems } from "./constants";
import Header from "./components/Header";

function App() {
  return (
    <AmyLayout menuItems={menuItems} header={<Header />}>
      <Outlet />
    </AmyLayout>
  );
}

export default App;
