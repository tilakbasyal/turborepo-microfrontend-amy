import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { AmyLayout } from "ui";
import { menuItems } from "./constants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AmyLayout menuItems={menuItems}>
      <p>hello</p>
    </AmyLayout>
  );
}

export default App;
