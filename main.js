document.addEventListener("DOMContentLoaded", function () {
  const valueSpan = document.getElementById("value");
  const decreaseBtn = document.querySelector(".decrease");
  const resetBtn = document.querySelector(".reset");
  const increaseBtn = document.querySelector(".increase");

  let counterValue = 0;

  function updateCounter() {
    valueSpan.textContent = counterValue;
  }

  decreaseBtn.addEventListener("click", function () {
    counterValue--;
    updateCounter();
  });

  resetBtn.addEventListener("click", function () {
    counterValue = 0;
    updateCounter();
  });

  increaseBtn.addEventListener("click", function () {
    counterValue++;
    updateCounter();
  });
});
