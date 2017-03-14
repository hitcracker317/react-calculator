import React from "react";
import ReactDOM from "react-dom";

const add = require("./action/add.js");
const button = require("./components/button.js");


onload = function(){
  ReactDOM.render(<button.Calculator />, document.querySelector("#calc__wrapper")); //描画
};
