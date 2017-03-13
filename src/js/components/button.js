import React from "react";
import ReactDOM from "react-dom";


const NumberButton = ({value}) => {
  return (
    <div className="button button__number">
      <input type="button" value={value} onClick="" data-number={value} />
    </div>
  );
};

export class Calculator extends React.Component {

  render() {

    var numberButtonArray = [];
    for (var i = 1; i <= 9; i++) {
      numberButtonArray.push(<NumberButton value={i}/>);
    }

    return (
      <div className="numberbutton__wrapper">
        {numberButtonArray}
      </div>
    );
  }
}
