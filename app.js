import {
  showCalendar,
  rendering,
  showLastMonth,
  showNextMonth,
} from "./src/calendar.js";

let containers = [...document.querySelectorAll(".container")];

containers.forEach((container) => {
  showCalendar(container);
  rendering(container);
  showLastMonth(container);
  showNextMonth(container);
});

document.querySelector(".calendar").style.setProperty("--calendar-size", 220);
