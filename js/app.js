"use strict";

document.addEventListener("DOMContentLoaded", init);
const plans = {
  Annually: { basic: "199.99", professional: "249.99", master: "399.99" },
  Monthly: { basic: "19.99", professional: "24.99", master: "39.99" },
};

function init() {
  const togglePlan = document.querySelector("#toggle-plan");
  togglePlan.addEventListener("change", changePlan);
}

function changePlan(ev) {
  // togglePlan.checked:
  // true: Monthly
  // false: Annually

  let whichPLan;
  ev.target.checked ? (whichPLan = "Monthly") : (whichPLan = "Annually");

  const priceList = plans[whichPLan];
  const priceElements = document.querySelectorAll(".price");

  priceElements.forEach((item) => {
    item.innerHTML = `<span>$</span>${priceList[item.id]}`;
  });
}
