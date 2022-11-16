import { sumOfDigit } from "./script.js";
const selectComp = document.querySelectorAll("a");
const cName = document.getElementById("companyName");
const cEmail = document.getElementById("companyEmail");
let obj;

export function forEachEl() {
  selectComp.forEach((el) => {
    el.addEventListener("click", (e) => {
      let res = obj.find((ele) => ele.id == e.target.id);
      cName.innerText = res.name;
      cEmail.innerText = res.email;
      boxValue.value = res.box;
      sumOfDigit(res.box);
    });
  });
}

export function getInfo() {
  fetch(
    "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
  )
    .then((res) => res.json())
    .then((data) => {
      obj = data;
      forEachEl();
    });
}