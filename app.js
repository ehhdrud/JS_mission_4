import { render, showLastMonth, showNextMonth } from "./src/calendar.js";

let containers = [...document.querySelectorAll(".container")];

containers.forEach((container) => {
  render(container);
  showLastMonth(container);
  showNextMonth(container);
});
