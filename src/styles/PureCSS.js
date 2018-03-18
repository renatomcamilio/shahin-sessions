import CSS from "purecss/build/pure.css";

const PureCSS = (...rules) => {
  return rules.reduce((acc, current, index) => {
    const className = `pure-${current}`;
    return `${acc} ${CSS[className]}`;
  }, "");
};

export default PureCSS;
