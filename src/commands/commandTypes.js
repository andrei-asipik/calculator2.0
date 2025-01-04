import {
  AppendNumberCommand,
  ChooseOperatorCommand,
  ClearCommand,
  EqualsCommand,
  ToggleSignCommand,
  PercentCommand,
  PowerCommand,
  FractionCommand,
  FactorialCommand,
  MemoryCommand,
} from "./commands.js";

export const createCommandTypes = (calculator) => {
  return {
    number: (value) => new AppendNumberCommand(calculator, value),
    operator: (value) => new ChooseOperatorCommand(calculator, value),
    equals: () => new EqualsCommand(calculator),
    clear: () => new ClearCommand(calculator),
    "toggle-sign": (value) => new ToggleSignCommand(calculator, value),
    percent: () => new PercentCommand(calculator),
    square: () => new PowerCommand(calculator, 2),
    cube: () => new PowerCommand(calculator, 3),
    power: () => new ChooseOperatorCommand(calculator, "power"),
    "square-root": () => new PowerCommand(calculator, 1 / 2),
    "cube-root": () => new PowerCommand(calculator, 1 / 3),
    root: () => new ChooseOperatorCommand(calculator, "root"),
    fraction: () => new FractionCommand(calculator),
    factorial: () => new FactorialCommand(calculator),
    "memory-clear": () => new MemoryCommand(calculator, "MC"),
    "memory-add": () => new MemoryCommand(calculator, "M+"),
    "memory-subtract": () => new MemoryCommand(calculator, "M-"),
    "memory-recall": () => new MemoryCommand(calculator, "MR"),
  };
};
