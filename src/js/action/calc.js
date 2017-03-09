//ActionCreator
export const add = (a,b) => {
  //Action(ActionCreatorの中にActionが存在する)
  //const answer = a + b;

  return {
    //type：アクション名
    //value：viewから受け取った値でアクションを使用するために必要な材料
    type: "ADD",
    value1: a,
    value2: b

  };
}

export const minus = (a,b) => {

  return {
    //type：アクション名
    //value：viewから受け取った値でアクションを使用するために必要な材料
    type: "MINUS",
    value1: a,
    value2: b

  };
}
