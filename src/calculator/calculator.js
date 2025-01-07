export class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.memoryValue = 0;
    this.reset();
  }

  reset() {
    this.currentValue = "0";
    this.pendingValue = null;
    this.operator = null;
    this.updateDisplay();
    this.isResultShown = false;
  }

  appendNumber(number) {
    if (this.isResultShown) {
      this.reset();
    }
    this.currentValue =
      this.currentValue === "0" ? number : this.currentValue + number;
    this.updateDisplay();
  }

  appendDecimal() {
    if (this.isResultShown) {
      this.reset();
    }

    if (this.currentValue.includes(".")) return;

    this.currentValue =
      this.currentValue === "" ? "0." : this.currentValue + ".";
    this.updateDisplay();
  }

  chooseOperator(operator) {
    if (this.currentValue === "") {
      this.operator = operator;
      return;
    }
    if (this.pendingValue !== "null") {
      this.calculate();
    }
    this.operator = operator;
    this.pendingValue = this.currentValue;

    this.currentValue = "";
    this.isResultShown = false;
  }

  calculate() {
    const current = parseFloat(this.currentValue);
    const previous = parseFloat(this.pendingValue);

    if (isNaN(previous) || isNaN(current)) return;

    let result;
    switch (this.operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "×":
        result = previous * current;
        break;
      case "÷":
        if (current === 0) {
          result = "Error";
        } else result = previous / current;
        break;
      case "%":
        result = (previous * current) / 100;
        break;
      case "power":
        result = previous ** current;
        break;
      case "root":
        result = previous ** (1 / current);
        break;

      default:
        return;
    }

    this.currentValue = result.toString();
    this.operator = null;
    this.pendingValue = null;
    this.isResultShown = true;
    this.updateDisplay();
  }

  updateDisplay() {
    this.displayElement.textContent = this.currentValue;
  }

  toggleSign() {
    if (this.currentValue === "0") return;
    this.currentValue = (parseFloat(this.currentValue) * -1).toString();
    this.updateDisplay();
    this.isResultShown = true;
  }

  calculatePower(exponent) {
    const base = parseFloat(this.currentValue);
    if (isNaN(base) || isNaN(exponent)) return;

    this.currentValue = (base ** exponent).toString();
    this.updateDisplay();
    this.isResultShown = true;
  }

  calculateFraction() {
    if (this.currentValue === "0") return;
    this.currentValue = (1 / parseFloat(this.currentValue)).toString();
    this.isResultShown = true;
    this.updateDisplay();
  }

  calculateFactorial() {
    const current = parseInt(this.currentValue);

    if (isNaN(current) || current < 0) {
      this.currentValue = "Error";
    } else {
      let result = 1;
      for (let i = 1; i <= current; i++) {
        result *= i;
      }
      this.currentValue = result.toString();
    }

    this.updateDisplay();
    this.isResultShown = true;
  }

  calculateTenPower() {
    const exponent = parseFloat(this.currentValue);
    if (isNaN(exponent)) return;

    this.currentValue = (10 ** exponent).toString();
    this.updateDisplay();
    this.isResultShown = true;
  }

  handleMemory(action) {
    const current = parseFloat(this.currentValue);

    switch (action) {
      case "MC":
        this.memoryValue = 0;
        break;
      case "M+":
        if (!isNaN(current)) this.memoryValue += current;
        break;
      case "M-":
        if (!isNaN(current)) this.memoryValue -= current;
        break;
      case "MR":
        this.currentValue = this.memoryValue.toString();
        this.updateDisplay();
        this.isResultShown = true;
        break;
      default:
    }
  }
}
