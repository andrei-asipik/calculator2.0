import { Calculator } from "./calculator";

describe("Calculator operations", () => {
  let displayElement;
  let calculator;

  beforeEach(() => {
    displayElement = { textContent: "" };
    calculator = new Calculator(displayElement);
  });

  it("should add two numbers", () => {
    calculator.appendNumber("2");
    calculator.chooseOperator("+");
    calculator.appendNumber("3");
    calculator.calculate();

    expect(displayElement.textContent).toBe("5");
  });

  it("should subtract two numbers", () => {
    calculator.appendNumber("5");
    calculator.chooseOperator("-");
    calculator.appendNumber("3");
    calculator.calculate();

    expect(displayElement.textContent).toBe("2");
  });

  it("should multiply two numbers", () => {
    calculator.appendNumber("4");
    calculator.chooseOperator("×");
    calculator.appendNumber("3");
    calculator.calculate();

    expect(displayElement.textContent).toBe("12");
  });

  it("should divide two numbers", () => {
    calculator.appendNumber("6");
    calculator.chooseOperator("÷");
    calculator.appendNumber("3");
    calculator.calculate();

    expect(displayElement.textContent).toBe("2");
  });

  it("should divide number by 0", () => {
    calculator.appendNumber("6");
    calculator.chooseOperator("÷");
    calculator.appendNumber("0");
    calculator.calculate();

    expect(displayElement.textContent).toBe("Error");
  });

  it("should calculate percentage", () => {
    calculator.appendNumber("50");
    calculator.chooseOperator("%");
    calculator.appendNumber("200");
    calculator.calculate();

    expect(displayElement.textContent).toBe("100");
  });

  it("should change sign of a number", () => {
    calculator.appendNumber("5");
    calculator.toggleSign();
    calculator.calculate();

    expect(displayElement.textContent).toBe("-5");
  });

  it("should calculate square of a number", () => {
    calculator.appendNumber("4");
    calculator.chooseOperator("power");
    calculator.appendNumber("2");

    calculator.calculate();

    expect(displayElement.textContent).toBe("16");
  });

  it("should calculate cube of a number", () => {
    calculator.appendNumber("3");
    calculator.chooseOperator("power");
    calculator.appendNumber("3");

    calculator.calculate();

    expect(displayElement.textContent).toBe("27");
  });

  it("should calculate x to the power of y", () => {
    calculator.appendNumber("2");
    calculator.chooseOperator("power");
    calculator.appendNumber("5");
    calculator.calculate();

    expect(displayElement.textContent).toBe("32");
  });

  it("should calculate 10 to the power of x", () => {
    calculator.appendNumber("2");
    calculator.calculateTenPower();
    calculator.calculate();

    expect(displayElement.textContent).toBe("100");
  });

  it("should calculate 1/x", () => {
    calculator.appendNumber("5");
    calculator.calculateFraction();
    calculator.calculate();

    expect(displayElement.textContent).toBe("0.2");
  });

  it("should calculate square root of a number", () => {
    calculator.appendNumber("16");
    calculator.chooseOperator("root");
    calculator.appendNumber("2");

    calculator.calculate();

    expect(displayElement.textContent).toBe("4");
  });

  it("should calculate cube root of a number", () => {
    calculator.appendNumber("27");
    calculator.chooseOperator("root");
    calculator.appendNumber("3");
    calculator.calculate();

    expect(displayElement.textContent).toBe("3");
  });

  it("should calculate nth root of a number", () => {
    calculator.appendNumber("81");
    calculator.chooseOperator("root");
    calculator.appendNumber("4");
    calculator.calculate();

    expect(displayElement.textContent).toBe("3");
  });

  it("should calculate factorial", () => {
    calculator.appendNumber("5");
    calculator.calculateFactorial();

    expect(displayElement.textContent).toBe("120");
  });

  it("should return error for negative factorial", () => {
    calculator.appendNumber("-5");
    calculator.calculateFactorial();

    expect(displayElement.textContent).toBe("Error");
  });
});
