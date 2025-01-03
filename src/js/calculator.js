const displayElement = document.getElementById("display");
const calculator = new Calculator(displayElement);

const commandMap = {
  number: (value) => new AppendNumberCommand(calculator, value),
  operator: (value) => new ChooseOperatorCommand(calculator, value),
  equals: () => new EqualsCommand(calculator),
  clear: () => new ClearCommand(calculator),
  "toggle-sign": (value) => new ToggleSignCommand(calculator, value),
  percent: () => new PercentCommand(calculator),
  square: () => new PowerCommand(calculator, 2),
  cube: () => new PowerCommand(calculator, 3),
  power: (value) => new PowerCommand(calculator, value),
};

document.querySelectorAll(".button").forEach((button) => {
  const action = button.dataset.action;
  const value = button.textContent.trim();
  button.addEventListener("click", () => {
    const commandFactory = commandMap[action];
    if (commandFactory) {
      const command = commandFactory(value);
      command.execute();
    }
  });
});

class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.reset();
  }

  reset() {
    this.currentValue = "0";
    this.pendingValue = null;
    this.operator = null;
    this.updateDisplay();
  }

  appendNumber(number) {
    this.currentValue =
      this.currentValue === "0" ? number : this.currentValue + number;
    this.updateDisplay();
  }

  chooseOperator(operator) {
    if (this.currentValue === "") return;
    if (this.pendingValue !== null) {
      this.calculate();
    }
    this.operator = operator;
    this.pendingValue = this.currentValue;
    this.currentValue = "0";
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
        result = previous / current;
        break;
      default:
        return;
    }

    this.currentValue = result.toString();
    this.operator = null;
    this.pendingValue = null;
    this.updateDisplay();
  }

  updateDisplay() {
    this.displayElement.textContent = this.currentValue;
  }

  toggleSign() {
    if (this.currentValue === "0") return;
    this.currentValue = (parseFloat(this.currentValue) * -1).toString();
    this.updateDisplay();
  }

  calculatePercent() {
    if (this.currentValue === "0") return;
    this.currentValue = (parseFloat(this.currentValue) / 100).toString();
    this.updateDisplay();
  }

  calculatePower(exponent) {
    const base = parseFloat(this.currentValue);
    if (isNaN(base) || isNaN(exponent)) return;

    this.currentValue = (base ** exponent).toString();
    this.updateDisplay();
    console.log(
      `calculatePower executed: ${base}^${exponent} = ${this.currentValue}`,
    );
  }
}

class Command {
  execute() {
    throw new Error("Метод execute должен быть реализован.");
  }
}

class AppendNumberCommand extends Command {
  constructor(calculator, number) {
    super();
    this.calculator = calculator;
    this.number = number;
  }

  execute() {
    this.calculator.appendNumber(this.number);
  }
}

class ChooseOperatorCommand extends Command {
  constructor(calculator, operator) {
    super();
    this.calculator = calculator;
    this.operator = operator;
  }

  execute() {
    this.calculator.chooseOperator(this.operator);
  }
}
class EqualsCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.calculate();
  }
}

class ClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.reset();
  }
}
class ToggleSignCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.toggleSign();
  }
}

class PercentCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.calculatePercent();
  }
}

class PowerCommand extends Command {
  constructor(calculator, exponent) {
    super();
    this.calculator = calculator;
    this.exponent = parseFloat(exponent);
  }

  execute() {
    console.log(`PowerCommand exponent: ${this.exponent}`);
    this.calculator.calculatePower(this.exponent);
  }
}
