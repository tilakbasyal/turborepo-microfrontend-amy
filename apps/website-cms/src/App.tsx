import { Outlet } from "react-router-dom";
import { AmyLayout } from "ui";
import { types } from "mobx-state-tree";

import reactLogo from "./assets/react.svg";
import "./App.css";

import { menuItems } from "./constants";
import Header from "./components/Header";
import { useMst } from "./models/Root";

function App() {
  const { navMenus } = useMst();
  console.log({ navMenus });
  return (
    <AmyLayout menuItems={menuItems} header={<Header />}>
      <Outlet />
    </AmyLayout>
  );
}

export default App;
