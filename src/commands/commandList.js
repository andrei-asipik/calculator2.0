import {
  AppendNumberCommand,
  ChooseOperatorCommand,
  ClearCommand,
  EqualsCommand,
  ToggleSignCommand,
  PowerCommand,
  FractionCommand,
  FactorialCommand,
  MemoryCommand,
  TenPowerCommand,
  AppendDecimalCommand,
} from "./commands.js";

export const createCommandList = (calculator) => {
  return {
    number: (value) => new AppendNumberCommand(calculator, value),
    decimal: () => new AppendDecimalCommand(calculator),
    operator: (value) => new ChooseOperatorCommand(calculator, value),
    equals: () => new EqualsCommand(calculator),
    clear: () => new ClearCommand(calculator),
    "toggle-sign": (value) => new ToggleSignCommand(calculator, value),
    percent: () => new ChooseOperatorCommand(calculator, "%"),
    square: () => new PowerCommand(calculator, 2),
    cube: () => new PowerCommand(calculator, 3),
    power: () => new ChooseOperatorCommand(calculator, "power"),
    "square-root": () => new PowerCommand(calculator, 1 / 2),
    "cube-root": () => new PowerCommand(calculator, 1 / 3),
    root: () => new ChooseOperatorCommand(calculator, "root"),
    fraction: () => new FractionCommand(calculator),
    factorial: () => new FactorialCommand(calculator),
    "ten-power": () => new TenPowerCommand(calculator),
    "memory-clear": () => new MemoryCommand(calculator, "MC"),
    "memory-add": () => new MemoryCommand(calculator, "M+"),
    "memory-subtract": () => new MemoryCommand(calculator, "M-"),
    "memory-recall": () => new MemoryCommand(calculator, "MR"),
  };
};
