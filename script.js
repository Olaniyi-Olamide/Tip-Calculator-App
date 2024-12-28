"use strict";

const billInput = document.getElementById("bill-input");
const mobileBillInput = document.getElementById("mobile-bill-input");
const fivePercentBtn = document.getElementById("five-percent-btn");
const mobileFivePercentBtn = document.getElementById("mobile-five-percent-btn");
const tenPercentBtn = document.getElementById("ten-percent-btn");
const mobileTenPercentBtn = document.getElementById("mobile-ten-percent-btn");
const fifteenPercentBtn = document.getElementById("fifteen-percent-btn");
const mobileFifteenPercentBtn = document.getElementById(
  "mobile-fifteen-percent-btn"
);
const twentyFivePercentBtn = document.getElementById("twentyfive-percent-btn");
const mobileTwentyFivePercentBtn = document.getElementById(
  "mobile-twentyfive-percent-btn"
);
const fiftyPercentBtn = document.getElementById("fifty-percent-btn");
const mobileFiftyPercentBtn = document.getElementById(
  "mobile-fifty-percent-btn"
);
const customPercentBtn = document.getElementById("custom-percent-btn");
const mobileCustomPercentBtn = document.getElementById(
  "mobile-custom-percent-btn"
);
const peopleInput = document.getElementById("people-input");
const mobilePeopleInput = document.getElementById("mobile-people-input");
const tip = document.getElementById("tip");
const mobileTip = document.getElementById("mobile-tip");
const total = document.getElementById("total");
const mobileTotal = document.getElementById("mobile-total");
const resetBtn = document.getElementById("reset-btn");
const mobileResetBtn = document.getElementById("mobile-reset-btn");
const errorMsg = document.getElementById("error-msg");
const mobileErrorMsg = document.getElementById("mobile-error-msg");
const tests = document.getElementById("test");

let tips;
const calcTipPercent = function (currentPercent) {
  tips = (Number(billInput.value) * currentPercent) / Number(peopleInput.value);
  tip.innerHTML = `$${tips.toFixed(2)}`;
  return tip.innerHTML;
};
let mobileTips;
const calcMobileTipPercent = function (currentMobilePercent) {
  mobileTips =
    (Number(mobileBillInput.value) * currentMobilePercent) /
    Number(mobilePeopleInput.value);
  mobileTip.innerHTML = `$${mobileTips.toFixed(2)}`;
  return mobileTip.innerHTML;
};

const calcTotal = function () {
  let totals =
    Number(billInput.value / Number(peopleInput.value)) + Number(tips);
  total.innerHTML = `$${totals.toFixed(2)}`;
  return total.innerHTML;
};
const calcMobileTotal = function () {
  let mobileTotals =
    Number(mobileBillInput.value / Number(mobilePeopleInput.value)) +
    Number(mobileTips);
  mobileTotal.innerHTML = `$${mobileTotals.toFixed(2)}`;
  return mobileTotal.innerHTML;
};

const handlingErrors = function () {
  if (billInput.value === "" || peopleInput.value === "") {
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }
  if (Number(peopleInput.value) === 0) {
    errorMsg.style.display = "blocK";
    peopleInput.style.borderColor = "red";
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  } else {
    errorMsg.style.display = "none";
    peopleInput.style.borderColor = "hsl(172, 67%, 45%)";
  }
};

const handlingMobileErrors = function () {
  if (mobileBillInput.value === "" || mobilePeopleInput.value === "") {
    mobileTip.innerHTML = "$0.00";
    mobileTotal.innerHTML = "$0.00";
  }

  if (Number(mobilePeopleInput.value) === 0) {
    mobileErrorMsg.style.display = "block";
    mobilePeopleInput.style.borderColor = "red";
    mobileTip.innerHTML = "$0.00";
    mobileTotal.innerHTML = "$0.00";
  } else {
    mobileErrorMsg.style.display = "none";
    mobilePeopleInput.style.borderColor = "hsl(172, 67%, 45%)";
  }
};

fivePercentBtn.addEventListener("mousedown", () => {
  fivePercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcTipPercent(0.05);
  calcTotal();
  handlingErrors();
});
fivePercentBtn.addEventListener("mouseup", function () {
  fivePercentBtn.style.background = "hsl(183, 100%, 15%)";
});

mobileFivePercentBtn.addEventListener("mousedown", () => {
  mobileFivePercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcMobileTipPercent(0.05);
  calcMobileTotal();
  handlingMobileErrors();
});
mobileFivePercentBtn.addEventListener("mouseup", function () {
  mobileFivePercentBtn.style.background = "hsl(183, 100%, 15%)";
});

tenPercentBtn.addEventListener("mousedown", function () {
  tenPercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcTipPercent(0.1);
  calcTotal();
  handlingErrors();
});
tenPercentBtn.addEventListener("mouseup", function () {
  tenPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

mobileTenPercentBtn.addEventListener("mousedown", function () {
  mobileTenPercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcMobileTipPercent(0.1);
  calcMobileTotal();
  handlingMobileErrors();
});
mobileTenPercentBtn.addEventListener("mouseup", function () {
  mobileTenPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

fifteenPercentBtn.addEventListener("mousedown", function () {
  fifteenPercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcTipPercent(0.15);
  calcTotal();
  handlingErrors();
});
fifteenPercentBtn.addEventListener("mouseup", function () {
  fifteenPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

mobileFifteenPercentBtn.addEventListener("mousedown", function () {
  mobileFifteenPercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcMobileTipPercent(0.15);
  calcMobileTotal();
  handlingMobileErrors();
});
mobileFifteenPercentBtn.addEventListener("mouseup", function () {
  mobileFifteenPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

twentyFivePercentBtn.addEventListener("mousedown", function () {
  twentyFivePercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcTipPercent(0.25);
  calcTotal();
  handlingErrors();
});
twentyFivePercentBtn.addEventListener("mouseup", function () {
  twentyFivePercentBtn.style.background = "hsl(183, 100%, 15%)";
});

mobileTwentyFivePercentBtn.addEventListener("mousedown", function () {
  mobileTwentyFivePercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcMobileTipPercent(0.25);
  calcMobileTotal();
  handlingMobileErrors();
});
mobileTwentyFivePercentBtn.addEventListener("mouseup", function () {
  mobileTwentyFivePercentBtn.style.background = "hsl(183, 100%, 15%)";
});

fiftyPercentBtn.addEventListener("mousedown", function () {
  fiftyPercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcTipPercent(0.5);
  calcTotal();
  handlingErrors();
});
fiftyPercentBtn.addEventListener("mouseup", function () {
  fiftyPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

mobileFiftyPercentBtn.addEventListener("mousedown", function () {
  mobileFiftyPercentBtn.style.background = "hsl(172, 67%, 45%)";
  calcMobileTipPercent(0.5);
  calcMobileTotal();
  handlingMobileErrors();
});
mobileFiftyPercentBtn.addEventListener("mouseup", function () {
  mobileFiftyPercentBtn.style.background = "hsl(183, 100%, 15%)";
});

customPercentBtn.addEventListener("keyup", function () {
  let customPercent = Number(customPercentBtn.value) / 100;
  calcTipPercent(customPercent);
  calcTotal();
  if (customPercentBtn.value === "") {
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  }
  handlingErrors();
  return customPercent;
});
mobileCustomPercentBtn.addEventListener("keyup", function () {
  let mobileCustomPercent = Number(mobileCustomPercentBtn.value) / 100;
  calcMobileTipPercent(mobileCustomPercent);
  calcMobileTotal();
  if (mobileCustomPercentBtn.value === "") {
    mobileTip.innerHTML = "$0.00";
    mobileTotal.innerHTML = "$0.00";
  }
  handlingMobileErrors();
  return mobileCustomPercent;
});

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";
  customPercentBtn.value = "";
  errorMsg.innerHTML = "";
  tip.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
});
mobileResetBtn.addEventListener("click", function () {
  mobileBillInput.value = "";
  mobilePeopleInput.value = "";
  mobileCustomPercentBtn.value = "";
  mobileErrorMsg.innerHTML = "";
  mobileTip.innerHTML = "$0.00";
  mobileTotal.innerHTML = "$0.00";
});
