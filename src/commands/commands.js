export class Command {
  execute() {
    throw new Error("Метод execute должен быть реализован.");
  }
}

export class AppendNumberCommand extends Command {
  constructor(calculator, number) {
    super();
    this.calculator = calculator;
    this.number = number;
  }

  execute() {
    this.calculator.appendNumber(this.number);
  }
}

export class ChooseOperatorCommand extends Command {
  constructor(calculator, operator) {
    super();
    this.calculator = calculator;
    this.operator = operator;
  }

  execute() {
    this.calculator.chooseOperator(this.operator);
  }
}
export class EqualsCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.calculate();
  }
}

export class ClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.reset();
  }
}
export class ToggleSignCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.toggleSign();
  }
}

export class PercentCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.calculatePercent();
  }
}

export class PowerCommand extends Command {
  constructor(calculator, exponent) {
    super();
    this.calculator = calculator;
    this.exponent = parseFloat(exponent);
  }

  execute() {
    this.calculator.calculatePower(this.exponent);
  }
}

export class FractionCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.calculateFraction();
  }
}
export class FactorialCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.calculateFactorial();
  }
}

export class MemoryCommand extends Command {
  constructor(calculator, action) {
    super();
    this.calculator = calculator;
    this.action = action;
  }

  execute() {
    this.calculator.handleMemory(this.action);
  }
}
