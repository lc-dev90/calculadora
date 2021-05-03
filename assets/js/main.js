function createCalc() {
  return {
    inputData: document.querySelector(".input-data"),

    start() {
      this.clickButtons();
      alert("Started!");
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const targetElement = e.target;
        if (targetElement.classList.contains("grid-item-num")) {
          this.throwToDisplay(targetElement.innerText);
        }
        if (targetElement.classList.contains("grid-item-clear")) {
          this.clearDisplay();
        }
        if (targetElement.classList.contains("grid-item-del")) {
          this.delItem();
        }
      });
    },

    delItem() {
      this.inputData.value = this.inputData.value.slice(0, -1);
    },

    clearDisplay() {
      this.inputData.value = "";
    },

    throwToDisplay(value) {
      this.inputData.value += value;
    },
  };
}

const calc = createCalc();
calc.start();
