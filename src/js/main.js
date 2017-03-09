import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "react-redux"; //reduxのcreateStoreメソッド読み込んでStoreを作成

//import {createStore} from "react-redux";

const button = require("./components/button.js");

const add = require("./action/calc.js");
const addReducer = require("./reducer/calc.js");

const value1 = 30;
const value2 = 15;






const initialState = {
  //キーと値を保有するオブジェクト
  value : 0
}
const store = createStore(calc, initialState);

//アクションをreducerに渡す
store.dispatch(actionCreator());

// stateの状態を監視して、変化があれば登録しておいたリスナーを実行
store.subscribe(() => {

  //リスナーの処理

  // stateを取得
  store.getState();
});





onload = function(){

  store.dispatch(add.add(10,25)); //actionをStoreに送る

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
