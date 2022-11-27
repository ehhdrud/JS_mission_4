//calendar-nav-txt
let date = new Date();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.querySelector(".month").innerText = months[date.getMonth()];
document.querySelector(".year").innerText = date.getFullYear();

//calendar-grid
//요일 삽입
