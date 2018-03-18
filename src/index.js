import React from "react";
import { render } from "react-dom";
import Button from "./Button";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Button label="Shahin" />
    <Button label="Shahin" flavour="light" />
    <Button label="Shahin" flavour="dark" />
  </div>
);

render(<App />, document.getElementById("root"));
