import { combineReducers } from "redux"; //reducerを結合させるメソッド

//Reducer
const add = (state,action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        value: action.answer,
      });
    default:
      return state;
  }
}

//関数をまとめて外に公開する
const calc = combineReducers({
  add
});

export default calc;
