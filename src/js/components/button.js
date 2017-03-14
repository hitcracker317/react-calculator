import React from "react";
import ReactDOM from "react-dom";

const CalcValue = require("./value.js");

const NumberButton = ({value}) => {
  return (
    <div className="button button__number">
      <input type="button" value={value} onClick="" data-number={value} className="button__inner"/>
    </div>
  );
};


const CalculatorButton = ({operator}) => {

  switch (operator) {
    case "=":
        return (
          <div className="button button__equal">
            <input type="button" value={operator} onClick="" data-number={operator} className="button__inner"/>
          </div>
        );
      break;

    case "+":
        return (
          <div className="button button__calc">
            <input type="button" value={operator} onClick="" data-number={operator} className="button__inner"/>
          </div>
        );
      break;

    case "-":
        return (
          <div className="button button__calc">
            <input type="button" value={operator} onClick="" data-number={operator} className="button__inner"/>
          </div>
        );
      break;

    case "×":
        return (
          <div className="button button__calc">
            <input type="button" value={operator} onClick="" data-number={operator} className="button__inner"/>
          </div>
        );
      break;

    case "÷":
        return (
          <div className="button button__calc">
            <input type="button" value={operator} onClick="" data-number={operator} className="button__inner"/>
          </div>
        );
      break;
    default:
  }
};


export class Calculator extends React.Component {

  render() {

    var numberButtonArray = [];
    for (var i = 1; i <= 9; i++) {
      numberButtonArray.push(<NumberButton value={i}/>);
    }

    return (
      <div className="calc__inner">

        <CalcValue.CalculatorValue />

        <div className="button__wrapper">
          <NumberButton value={7}/>
          <NumberButton value={8}/>
          <NumberButton value={9}/>
          <CalculatorButton operator="÷"/>
          <NumberButton value={4}/>
          <NumberButton value={5}/>
          <NumberButton value={6}/>
          <CalculatorButton operator="×"/>
          <NumberButton value={1}/>
          <NumberButton value={2}/>
          <NumberButton value={3}/>
          <CalculatorButton operator="-"/>
          <NumberButton value={0}/>
          <NumberButton value={"."}/>
          <CalculatorButton operator="="/>
          <CalculatorButton operator="+"/>
        </div>

      </div>
    );
  }
}
