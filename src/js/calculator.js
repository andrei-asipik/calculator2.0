const displayElement = document.getElementById("display");
const calculator = new Calculator(displayElement);

const commandMap = {
  number: (value) => new AppendNumberCommand(calculator, value),
  operator: (value) => new ChooseOperatorCommand(calculator, value),
  equals: () => new EqualsCommand(calculator),
  clear: () => new ClearCommand(calculator),
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
    console.log("chooseOperator executed, operator:", this.operator);
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
    console.log("calculate executed, result:", this.currentValue);
    this.updateDisplay();
  }

  updateDisplay() {
    this.displayElement.textContent = this.currentValue;
    console.log("updateDisplay executed, display:", this.currentValue);
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
    // console.log("AppendNumberCommand executed with:", this.number);
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
    // console.log("ChooseOperatorCommand executed with:", this.operator);
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
