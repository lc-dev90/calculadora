function createCalc() {
  return {
    inputData: document.querySelector(".input-data"),

    start() {
      this.clickButtons();
      this.enterListener();
    },

    enterListener() {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.calc();
        }
      });
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
        if (targetElement.classList.contains("grid-item-calc")) {
          this.calc();
        }
      });
    },

    calc() {
      let calc = this.inputData.value;

      try {
        calc = eval(calc);
        if (!calc) {
          alert("Conta inválida");
          return;
        }
        this.inputData.value = calc;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
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
