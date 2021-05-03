function CreateCalc() {
  const inputData = document.querySelector(".input-data");

  this.start = function () {
    this.clickButtons();
    this.enterListener();
  };

  const enterListener = function () {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.calc();
      }
    });
  };

  const clickButtons = function () {
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
  };

  const calc = function () {
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
  };

  const delItem = function () {
    this.inputData.value = this.inputData.value.slice(0, -1);
  };

  const clearDisplay = function () {
    this.inputData.value = "";
  };

  const throwToDisplay = (value) => {
    this.inputData.value += value;
  };
}

const calc = new CreateCalc();
calc.start();
