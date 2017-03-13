import React from "react";
import ReactDOM from "react-dom";

const add = require("./action/add.js");

const button = require("./components/button.js");
//const valueText = require("./components/value.js");

const value1 = 30;
const value2 = 45;

onload = function(){
  ReactDOM.render(<button.Calculator />, document.querySelector("#wrapper")); //描画
};
