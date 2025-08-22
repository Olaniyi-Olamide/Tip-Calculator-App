"use strict";

// Elements
const input = document.querySelectorAll(".input");
const billInput = document.querySelector(".bill-input");
const fivePercentBtn = document.querySelector(".five-percent-btn");
const tenPercentBtn = document.querySelector(".ten-percent-btn");
const fifteenPercentBtn = document.querySelectorAll(".fifteen-percent-btn");
const twentyFivePercentBtn = document.querySelectorAll(
  ".twentyfive-percent-btn"
);
const fiftyPercentBtn = document.querySelectorAll(".fifty-percent-btn");
const customPercentBtn = document.querySelectorAll(".custom-percent-btn");
const peopleInput = document.querySelector(".people-input");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset-btn");
const errorMsg = document.querySelector(".error-msg");

input.forEach((_, i) => {
  input[i].addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });
});

// default values
const defaultValues = function () {
  tip.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
};
const resetInput = function () {
  customPercentBtn.forEach((btn) => {
    btn.value = "";
  });
};

// calculated values
const calculatedValues = function () {
  tip.innerHTML = `$${tips.toFixed(2)}`;
  total.innerHTML = `$${totals.toFixed(2)}`;
};

// Error Handling
const handlingErrors = function () {
  if (billInput.value === "" || peopleInput.value === "") {
    defaultValues();
  } else {
    calculatedValues();
  }
  if (+peopleInput.value === 0) {
    defaultValues();
    errorMsg.innerHTML = "Can't be zero";
    peopleInput.style.borderColor = "red";
  } else {
    errorMsg.innerHTML = "";
    peopleInput.style.borderColor = "hsl(172, 67%, 45%)";
  }
};

// Calculating tips
let tips;
let totals;
const calcTipPercent = function (currentPercent) {
  tips = (+billInput.value * currentPercent) / +peopleInput.value;
  tip.innerHTML = `$${tips.toFixed(2)}`;
};

const calcTotal = function () {
  totals = +billInput.value / +peopleInput.value + tips;
  total.innerHTML = `$${totals.toFixed(2)}`;
};

// Events
fivePercentBtn.addEventListener("mousedown", () => {
  fivePercentBtn.style.background = "hsl(172, 67%, 45%)";
  resetInput();
  calcTipPercent(0.05);
  calcTotal();
  handlingErrors();
});
fivePercentBtn.addEventListener("mouseup", function () {
  fivePercentBtn.style.background = "hsl(183, 100%, 15%)";
});

tenPercentBtn.addEventListener("mousedown", () => {
  tenPercentBtn.style.background = "hsl(172, 67%, 45%)";
  resetInput();
  calcTipPercent(0.1);
  calcTotal();
  handlingErrors();
});
tenPercentBtn.addEventListener("mouseup", function () {
  tenPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

fifteenPercentBtn.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.background = "hsl(172, 67%, 45%)";
    resetInput();
    calcTipPercent(0.15);
    calcTotal();
    handlingErrors();
  });
  btn.addEventListener("mouseup", function () {
    btn.style.background = "hsl(183, 100%, 15%)";
  });
});

twentyFivePercentBtn.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.background = "hsl(172, 67%, 45%)";
    resetInput();
    calcTipPercent(0.25);
    calcTotal();
    handlingErrors();
  });
  btn.addEventListener("mouseup", function () {
    btn.style.background = "hsl(183, 100%, 15%)";
  });
});

fiftyPercentBtn.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.background = "hsl(172, 67%, 45%)";
    resetInput();
    calcTipPercent(0.5);
    calcTotal();
    handlingErrors();
  });
  btn.addEventListener("mouseup", function () {
    btn.style.background = "hsl(183, 100%, 15%)";
  });
});

customPercentBtn.forEach((btn) => {
  btn.addEventListener("keyup", function () {
    let customPercent = Number(btn.value) / 100;
    calcTipPercent(customPercent);
    calcTotal();
    if (btn.value === "") {
      defaultValues();
    }
    handlingErrors();
  });
});

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";
  errorMsg.innerHTML = "";
  peopleInput.style.borderColor = "hsl(172, 67%, 45%)";
  resetInput();
  defaultValues();
});
