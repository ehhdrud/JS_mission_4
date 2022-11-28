import render from "./src/calendar.js";

let containers = [...document.querySelectorAll(".container")];

containers.forEach((container) => {
  render(container);
});
