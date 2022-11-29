let date = new Date();

const render = (container) => {
  while (container.querySelector(".calendar-grid").hasChildNodes()) {
    container
      .querySelector(".calendar-grid")
      .removeChild(container.querySelector(".calendar-grid").firstChild);
  }

  //calendar-nav-txt
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
  container.querySelector(".month").innerText = months[date.getMonth()];
  container.querySelector(".year").innerText = date.getFullYear();

  //calendar-grid
  //요일 채우기
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < days.length; i++) {
    let div = document.createElement("div");
    div.classList.add("day");
    div.innerText = days[i];
    container.querySelector(".calendar-grid").appendChild(div);
  }
  //지난 달 날짜 채우기
  let lastMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  date.setDate(1);
  for (let i = date.getDay(); i > 0; i--) {
    let div = document.createElement("div");
    div.classList.add("date", "last-month-date");
    div.innerHTML = lastMonthLastDate - i + 1;
    container.querySelector(".calendar-grid").appendChild(div);
  }

  //이번 달 날짜 채우기
  let thisMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  for (let i = 0; i < thisMonthLastDate; i++) {
    let div = document.createElement("div");
    div.classList.add("date", "this-month-date");
    div.innerText = i + 1;
    container.querySelector(".calendar-grid").appendChild(div);
  }

  //다음 달 날짜 채우기
  let length = container.querySelector(".calendar-grid").childNodes.length;
  for (let i = 0; i < 49 - length; i++) {
    let div = document.createElement("div");
    div.classList.add("date", "next-month-date");
    div.innerText = i + 1;
    container.querySelector(".calendar-grid").appendChild(div);
  }

  //일요일 빨간색으로 표시
  let sunday = 0;
  for (let i = 1; i <= days.length; i++) {
    date.setDate(i);
    if (date.getDay() === 0) {
      sunday = date.getDate();
    }
  }
  while (sunday <= thisMonthLastDate) {
    container.querySelectorAll(".this-month-date")[sunday - 1].style.color =
      "red";
    sunday += 7;
  }
};

//지난 달 달력 보기
const showLastMonth = (container) => {
  container
    .querySelector(".bx-caret-left")
    .addEventListener("click", function () {
      date.setMonth(date.getMonth() - 1);
      render(container);
    });
};

//다음 달 달력 보기
const showNextMonth = (container) => {
  container
    .querySelector(".bx-caret-right")
    .addEventListener("click", function () {
      date.setMonth(date.getMonth() + 1);
      render(container);
    });
};

export { render, showLastMonth, showNextMonth };
