let date = new Date();

const rendering = (container) => {
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
  //지난 달이나 다음 달 달력 렌더링 시 현재 렌더링된 달력 삭제
  while (container.querySelector(".calendar-grid").hasChildNodes()) {
    container
      .querySelector(".calendar-grid")
      .removeChild(container.querySelector(".calendar-grid").firstChild);
  }

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

  //현재 날짜에 초록색 원 표시
  let today = new Date();
  if (
    container.querySelector(".month").innerText == months[today.getMonth()] &&
    container.querySelector(".year").innerText == today.getFullYear()
  ) {
    let todayDate =
      container.querySelectorAll(".this-month-date")[today.getDate() - 1];
    todayDate.style.border = "solid 1px #44c379";
    todayDate.style.borderRadius = "50%";
  }

  //마우스 올릴 때 초록색 원 표시
  let hoveredDate = container.querySelectorAll(".date");
  for (let i = 0; i < hoveredDate.length; i++) {
    hoveredDate[i].addEventListener("mouseover", function () {
      hoveredDate[i].classList.add("hovered");
    });

    hoveredDate[i].addEventListener("mouseout", function () {
      hoveredDate[i].classList.remove("hovered");
    });
  }

  //data-picker에 선택한 날짜 렌더링
  //클릭 시 이벤트 핸들러 정의
  let clickedYear, clickedMonth, clickedDate;
  const click = () => {
    container.querySelector(
      ".date-picker"
    ).value = `${clickedYear}-${clickedMonth
      .toString()
      .padStart(2, "0")}-${clickedDate.toString().padStart(2, "0")}`;
    container.querySelector(".calendar").style.visibility = "hidden";
  };
  //이전 달의 날짜를 선택했을 때
  let clickLastMonthDate = container.querySelectorAll(".last-month-date");
  clickLastMonthDate.forEach((element) => {
    element.addEventListener("click", () => {
      clickedYear = date.getFullYear();
      clickedMonth = date.getMonth();
      if (clickedMonth === 0) {
        clickedYear--;
        clickedMonth = 12;
      }
      clickedDate = element.innerText;
      click();
    });
  });
  //이번 달의 날짜를 선택했을 때
  let clickThisMonthDate = container.querySelectorAll(".this-month-date");
  clickThisMonthDate.forEach((element) => {
    element.addEventListener("click", () => {
      clickedYear = date.getFullYear();
      clickedMonth = date.getMonth() + 1;
      clickedDate = element.innerText;
      click();
    });
  });
  //다음달의 날짜를 선택했을 때
  let clickNextMonthDate = container.querySelectorAll(".next-month-date");
  clickNextMonthDate.forEach((element) => {
    element.addEventListener("click", () => {
      clickedYear = date.getFullYear();
      clickedMonth = date.getMonth() + 2;
      clickedDate = element.innerText;
      if (clickedMonth === 13) {
        clickedYear++;
        clickedMonth = 1;
      }
      click();
    });
  });
};

//Data-picker 클릭 시 Calendar 보여주기
const showCalendar = (container) => {
  const datePickerClick = container.querySelector(".date-picker");
  datePickerClick.addEventListener("click", () => {
    container.querySelector(".calendar").style.visibility = "visible";
  });
};

//지난 달 달력 보기
const showLastMonth = (container) => {
  container
    .querySelector(".bx-caret-left")
    .addEventListener("click", function () {
      date.setMonth(date.getMonth() - 1);
      rendering(container);
    });
};

//다음 달 달력 보기
const showNextMonth = (container) => {
  container
    .querySelector(".bx-caret-right")
    .addEventListener("click", function () {
      date.setMonth(date.getMonth() + 1);
      rendering(container);
    });
};

export { showCalendar, rendering, showLastMonth, showNextMonth };
