import { Input } from "antd";
import * as React from "react";
import { render } from "react-dom";

const App = () => (
  <div>
    <Input autoFocus />
  </div>
);

render(<App />, document.getElementById("root"));
