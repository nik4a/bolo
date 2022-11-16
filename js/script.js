import {getInfo} from "./app.js";

const boxValue = document.getElementById("boxValue");
let boxLabel = document.getElementById("boxNumber");
let newArr;
let sumNum = 0;

export function sumOfDigit(arr) {
  newArr = arr.split(",");

  for (let i = 0; i < newArr.length; i++) {
    sumNum += eval(newArr[i]);
  }

  boxLabel.innerText = Math.ceil(sumNum / 10);
  sumNum = 0;
  newArr = "";
}

function changeNumber() {
  boxValue.addEventListener("change", (e) => {
    newArr = e.target.value.split(",");

    for (let i = 0; i < newArr.length; i++) {
      sumNum += eval(newArr[i]);
    }

    boxLabel.innerText = Math.ceil(sumNum / 10);
    sumNum = 0;
    newArr = "";
  });
}
changeNumber();
getInfo();
