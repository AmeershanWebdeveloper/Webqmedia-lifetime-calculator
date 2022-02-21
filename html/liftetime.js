// avarage purchase value
var avgPurchaseValue = document.querySelector("#AvgPurchaseValue");
var avgPurchaseValueOutput = avgPurchaseValue.value;

// profitMarin
var profitMarginInput = document.querySelector("#ProfitMarginInput");
var profitMarginOutput = document.querySelector("#profit-marginOutput");
profitMarginOutput.innerHTML = profitMarginInput.value;
profitMarginInput.addEventListener("input", () => {
  profitMarginOutput.innerHTML = profitMarginInput.value;
});

// ________________
// ReturnPerYearInput
var returnPerYearInput = document.querySelector("#ReturnPerYearInput");
var returnPerYearOutput = document.querySelector("#ReturnsPerYearOutput");
returnPerYearInput.addEventListener("input", () => {
  returnPerYearOutput.innerHTML = returnPerYearInput.value;
});
// ________________

// customer terms in year
var csTermsInYearInput = document.querySelector("#CsTermsInYearInput");
var CsTermsInYearOutput = document.querySelector("#CsTermsInYearOutput");
csTermsInYearInput.addEventListener("input", () => {
  CsTermsInYearOutput.innerHTML = csTermsInYearInput.value;
});
// _____________

// Number of reference
var numberOfReferenceInput = document.querySelector("#NumberOfReferenceInput");
var numberOfReferenceOutput = document.querySelector(
  "#NumberOfReferenceOutput"
);
numberOfReferenceInput.addEventListener("input", () => {
  numberOfReferenceOutput.innerHTML = numberOfReferenceInput.value;
});

// lifetime calculation sarts

// result values
var avgPurchaseValueResult = document.querySelector("#AvgPurchaseValueResult");
var profitMarginResult = document.querySelector("#ProfitMarginResult");
var returnsPerYearResultt = document.querySelector("#ReturnsPerYearResult");
var csTermsInYearResult = document.querySelector("#CsTermsInYearResult");
var numberOfReferenceResult = document.querySelector(
  "#NumberOfReferenceResult"
);

var form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  avgPurchaseValueResult.innerHTML = avgPurchaseValue.value;
  profitMarginResult.innerHTML = profitMarginInput.value;
  returnsPerYearResultt.innerHTML = returnPerYearInput.value;
  csTermsInYearResult.innerHTML = csTermsInYearInput.value;
  numberOfReferenceResult.innerHTML = numberOfReferenceInput.value;

  // _______________
  var finalResult = document.querySelector("#finalResult");

  finalResult.innerHTML =
    "₹" +
    Math.round(
      ((Number(avgPurchaseValue.value) * Number(profitMarginInput.value)) /
        100) *
        Number(returnPerYearInput.value) *
        Number(csTermsInYearInput.value) *
        (Number(numberOfReferenceInput.value) + 1)
    );
});

form.addEventListener("reset", () => {
  profitMarginOutput.innerHTML = 0;
  returnPerYearOutput.innerHTML = 1;
  CsTermsInYearOutput.innerHTML = 1;
  numberOfReferenceOutput.innerHTML = 0.1;
  avgPurchaseValueResult.innerHTML = 0;
  profitMarginResult.innerHTML = 0;
  returnsPerYearResultt.innerHTML = 0;
  csTermsInYearResult.innerHTML = 0;
  numberOfReferenceResult.innerHTML = 0;
  finalResult.innerHTML = "₹" + "0000";
});
