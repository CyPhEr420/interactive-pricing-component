const slider = document.querySelector(".slider");
const productValueElement = document.querySelector(".product-value");
const prizeElement = document.querySelector(".pricing");
const toggleCheckbox = document.getElementById("toggle");
const sliderValues = {
  0: { prize: 8, value: 10 },
  1: { prize: 12, value: 50 },
  2: { prize: 16, value: 100 },
  3: { prize: 24, value: 500 },
  4: { prize: 36, value: 1 },
};

const changePricing = () => {
  const sliderValue = slider.value;
  const selectedPlan = sliderValues[sliderValue];
  let prize = selectedPlan.prize;
  if (toggleCheckbox.checked) {
    prize *= 0.75;
  }
  productValueElement.textContent = `${
    selectedPlan.value === 1 ? "1m" : selectedPlan.value + "k"
  } pageviews`;
  prizeElement.firstChild.textContent = `$${prize}.00`;
};

slider.addEventListener("input", (e) => {
  changePricing(e);
});

slider.addEventListener("input", function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #a1f2ea ${value}%, #ddd ${value}%)`;
});

toggleCheckbox.addEventListener("change", () => {
  changePricing();
});

changePricing();
