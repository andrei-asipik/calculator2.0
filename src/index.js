import "./thems/thems.js";
import "./styles/main.scss";
import { createCommandList } from "./commands/commandList.js";
import { Calculator } from "./calculator/calculator.js";

const displayElement = document.getElementById("display");
const calculator = new Calculator(displayElement);

const commandTypes = createCommandList(calculator);

document.querySelectorAll(".button").forEach((button) => {
  const action = button.dataset.action;
  const value = button.textContent.trim();
  button.addEventListener("click", () => {
    const commandFactory = commandTypes[action];
    if (commandFactory) {
      const command = commandFactory(value);
      command.execute();
    }
  });
});
