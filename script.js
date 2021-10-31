const priceInp = document.querySelector("#priceInp");
const tarPercentInp = document.querySelector("#tarPercentInp");
const lossPercentInp = document.querySelector("#lossPercentInp");

const buttonPercent = document.querySelector("#percentBtn");

const targetTxt = document.querySelector(".targetTxt");
const stopLossTxt = document.querySelector(".stopLossTxt");

const toggleBtn = document.querySelector(".toggleBtn");
const containerInnerPercent = document.querySelector(".containerInnerPercent");

const entryPriceCountInp = document.querySelector("#entryPriceCount");
const stopLossPriceCountInp = document.querySelector("#stopLossPriceCount");
const riskAmountInp = document.querySelector("#riskAmount");

const stockCountBtn = document.querySelector("#StockCountBtn");

const quantityRes = document.querySelector(".QuantityRes");
const countTargetRes = document.querySelector(".countTarget");

const containerInnerCount = document.querySelector(".containerInnerCount");

toggleBtn.classList.add("bounce");

entryPriceCountInp.addEventListener("focus", () => {
  entryPriceCountInp.style.borderColor = "#00000044";
});
stopLossPriceCountInp.addEventListener("focus", () => {
  stopLossPriceCountInp.style.borderColor = "#00000044";
});
riskAmountInp.addEventListener("focus", () => {
  riskAmountInp.style.borderColor = "#00000044";
});

stockCountBtn.addEventListener("click", () => {
  if (entryPriceCountInp.value === "") {
    entryPriceCountInp.style.borderColor = "red";
  }
  if (stopLossPriceCountInp.value === "") {
    stopLossPriceCountInp.style.borderColor = "red";
  }
  if (riskAmountInp.value === "") {
    riskAmountInp.style.borderColor = "red";
  }

  if (
    entryPriceCountInp.value != "" &&
    stopLossPriceCountInp.value != "" &&
    riskAmountInp.value != ""
  ) {
    quantityRes.textContent = `${Math.floor(
      Number(riskAmountInp.value) /
        (Number(entryPriceCountInp.value) - Number(stopLossPriceCountInp.value))
    )}`;
    countTargetRes.textContent = `${(
      (Number(entryPriceCountInp.value) - Number(stopLossPriceCountInp.value)) *
        2 +
      Number(entryPriceCountInp.value)
    ).toFixed(2)}`;
  }
});

priceInp.addEventListener("focus", () => {
  priceInp.style.borderColor = "#00000044";
});
tarPercentInp.addEventListener("focus", () => {
  tarPercentInp.style.borderColor = "#00000044";
});
lossPercentInp.addEventListener("focus", () => {
  lossPercentInp.style.borderColor = "#00000044";
});

buttonPercent.addEventListener("click", () => {
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
    ).toFixed(3)} (${(
      (
        Number(priceInp.value) +
        Number(priceInp.value) * (Number(tarPercentInp.value) / 100)
      ).toFixed(3) - Number(priceInp.value)
    ).toFixed(1)})`;
    stopLossTxt.textContent = `${(
      Number(priceInp.value) -
      Number(priceInp.value) * (Number(lossPercentInp.value) / 100)
    ).toFixed(3)} (${(
      (
        Number(priceInp.value) -
        Number(priceInp.value) * (Number(lossPercentInp.value) / 100)
      ).toFixed(3) - Number(priceInp.value)
    ).toFixed(1)})`;
    toggleBtn.classList.remove("bounce");

    setTimeout(() => {
      toggleBtn.classList.add("bounce");
    }, 6000);
  }
});

// gsap.to(".containerInnerPercent", {
//   opacity: 0,
//   duration: 0.5,
//   left: -100,
// });
// gsap.to(".toggleBtn", {
//   top: -20,
//   rotation: 180,
//   duration: 1,
//   delay: 0.4,
//   ease: "back.out(1.2)",
// });

let t1 = gsap.timeline({ paused: true });

t1.to(".containerInnerPercent", {
  yPercent: -150,
  opacity: 0,
  duration: 0.5,
  ease: "back.in(1.2)",
})
  .to(".toggleBtn", {
    top: -20,
    rotation: 180,
    duration: 0.5,
    ease: "back.out(1.2)",
  })
  .to(".containerInnerCount", {
    yPercent: -190,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.2)",
  })
  .reverse();
toggleBtn.addEventListener("click", () => {
  t1.reversed() ? t1.play() : t1.reverse();
  toggleBtn.classList.remove("bounce");
});
