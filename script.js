const priceInp = document.querySelector("#priceInp");
const tarPercentInp = document.querySelector("#tarPercentInp");
const lossPercentInp = document.querySelector("#lossPercentInp");

const button = document.querySelector(".button");

const targetTxt = document.querySelector(".targetTxt");
const stopLossTxt = document.querySelector(".stopLossTxt");

function removeBorder() {}

priceInp.addEventListener("focus", () => {
  priceInp.style.borderColor = "#00000044";
});
tarPercentInp.addEventListener("focus", () => {
  tarPercentInp.style.borderColor = "#00000044";
});
lossPercentInp.addEventListener("focus", () => {
  lossPercentInp.style.borderColor = "#00000044";
});

button.addEventListener("click", () => {
  if (priceInp.value === "") {
    priceInp.style.borderColor = "red";
  }
  if (tarPercentInp.value === "") {
    tarPercentInp.style.borderColor = "red";
  }
  if (lossPercentInp.value === "") {
    lossPercentInp.style.borderColor = "red";
  }

  if (
    priceInp.value != "" &&
    tarPercentInp.value != "" &&
    lossPercentInp.value != ""
  ) {
    targetTxt.textContent = `${(
      Number(priceInp.value) +
      Number(priceInp.value) * (Number(tarPercentInp.value) / 100)
    ).toFixed(3)}`;
    stopLossTxt.textContent = `${(
      Number(priceInp.value) -
      Number(priceInp.value) * (Number(lossPercentInp.value) / 100)
    ).toFixed(3)}`;
  }
});
