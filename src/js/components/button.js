import React from "react";
import ReactDOM from "react-dom";

//コンポーネント定義
export const calculatorButton = React.createClass({

  buttonClick: function(event) {
    //ボタンクリック時のイベント
    const selectedValue = event.currentTarget.getAttribute("data-number");
    alert(selectedValue + "をクリックしました!");

    //var answer = 4 + selectedValue + 2;
    //alert(answer + "が商の値!");
  },
  render() {
    const buttonValue = this.props.value;

    return (
      <div className="button">
        <input type="button" value={buttonValue} onClick={this.buttonClick} data-number={buttonValue} />
      </div>
    )
  }
});

// export const operatorButton =  React.createClass({
//
// });
