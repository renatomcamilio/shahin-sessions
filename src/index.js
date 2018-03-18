import React from "react";
import { render } from "react-dom";
import Button from "./components/Button";
import Navigation from "./components/Navigation";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Navigation
      items={[
        { label: "About", link: "#" },
        { label: "Contact", link: "#" },
        { label: "Product", link: "#" }
      ]}
    />

    <Button label="Take a Tour" flavour="light" />
    <Button label="Sign Up" flavour="dark" />
  </div>
);

render(<App />, document.getElementById("root"));
