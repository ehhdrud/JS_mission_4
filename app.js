// 모듈 가져오기
import {
  makeCalendar,
  showAndFade,
  showLastMonth,
  showNextMonth,
} from "./src/calendar.js";

// containers 변수에 "container" 클래스를 가지고 있는 모든 요소를 가져와서 할당
let containers = [...document.querySelectorAll(".container")];

// containers를 순회하며 각각의 요소("container" 클래스를 가지고 있는 요소)에서 가져온 함수들을 실행
containers.forEach((container) => {
  makeCalendar(container); // 달력을 만드는 함수
  showAndFade(container); // 달력을 보여주거나 사라지게 하는 함수
  showLastMonth(container); // 지난 달로 넘어가는 함수
  showNextMonth(container); // 다음 달로 넘아가는 함수
});
