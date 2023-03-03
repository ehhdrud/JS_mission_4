# Calendar &amp; Date picker

캘린더를 보여주고 날짜를 선택할 수 있는 Date picker를 구현한다.

- calendar-nav와 calendar-grid로 캘린더를 구성
- 자바스크립트로 calendar 요소의 width 값을 동적으로 변경할 수 있도록 CSS 변수를 사용하여 width 값을 관리하고, calendar 요소의 width 값이 변경되면 캘린더 전체의 크기와 폰트 사이즈가 연동해서 조정되도록 뷰를 구현
- DatePicker를 클릭하면 캘린더가 렌더링
- 현재를 기준으로 calendar 요소의 콘텐츠를 동적으로 생성하여 초기 렌더링
- calendar-nav 요소의 버튼을 클릭하면 익월 또는 전월을 기준으로 calendar 요소의 컨텐츠를 동적으로 생성하여 렌더링
- 현재 렌더링된 달의 1일 앞과 말일 뒤에 이전 달과 다음 달의 날짜를 표시
- 캘린터에 오늘이 포함되어 있으면 구별할 수 있도록 표시
- 날짜를 클릭하면 해당 날짜가 DatePicker의 값으로 출력
- 캘린더와 DatePicker 이외의 영역을 클릭하면 캘린더가 사라지도록 구현
- Date picker의 값이 존재할 때 DatePicker를 다시 클릭하면 DatePicker의 값을 기준으로 캘린더를 렌더링
