let ProfitMarginOutput = document.querySelector(".ProfitMarginOutput");

let input = document.getElementById("ProfitMarginInput");
input.addEventListener("input", () => {
  ProfitMarginOutput.innerHTML = input.value;
});
