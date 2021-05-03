function Calculator() {
  this.inputData = document.querySelector(".input-data");

  this.start = () => {
    this.clickButtons();
    this.enterListener();
  };

  this.throwToDisplay = (value) => (this.inputData.value += value);

  this.clearDisplay = () => (this.inputData.value = "");

  this.delItem = (value) =>
    (this.inputData.value = this.inputData.value.slice(0, -1));

  this.clickButtons = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("grid-item-num"))
        this.throwToDisplay(element.innerText);
      if (element.classList.contains("grid-item-clear")) this.clearDisplay();
      if (element.classList.contains("grid-item-del")) this.delItem();
      if (element.classList.contains("grid-item-calc")) this.calc();
    });
  };

  this.enterListener = function () {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.calc();
      }
    });
  };

  this.calc = () => {
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
}

const calc = new Calculator();
calc.start();
