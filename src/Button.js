import React from "react";

const fallback = {
  color: "#fff",
  "border-radius": "4px",
  padding: "12px 44px",
  "font-size": "20px",
  "background-color": "#e3e3e3"
};

const styles = {
  // fallback: fallback,
  fallback,
  light: {
    ...fallback,
    "background-color": "#ACDFE5"
  },
  dark: {
    ...fallback,
    "background-color": "#71A9FF"
  }
};

export default ({ label, flavour = "fallback" }) => {
  return <button style={styles[flavour]}>{label}</button>;
};
