import React from "react";
import ReactDOM from "react-dom";

const add = require("./action/add.js");
const button = require("./components/button.js");

const value1 = 30;
const value2 = 15;

onload = function(){
  ReactDOM.render(
    <h1>ハロー世界！！</h1>,
    document.querySelector("#wrapper")
  );

  //props
  class Add extends React.Component {
    render() {
      const a = this.props.a;
      const b = this.props.b;

      const addValue = add.add(a,b);

      return (
        <div>{a}+{b}の値は：{addValue}</div>
      );
    }
  }
  ReactDOM.render(<Add a={value1} b={value2} />,document.querySelector("#wrapper"));



  ReactDOM.render(<button.calculatorButton value="100" />, document.querySelector("#wrapper"));
};
