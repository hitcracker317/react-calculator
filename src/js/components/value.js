import React from "react";
import ReactDOM from "react-dom";

//数値を表示
export class CalculatorValue extends React.Component {
  render() {
    return (
      <div className="value">
        <p className="value__text">39</p>
      </div>
    );
  }
}
