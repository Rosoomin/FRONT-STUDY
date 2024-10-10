# FrontStudy week4
- [과제 배포 링크](https://github.com/Rosoomin/FRONT-STUDY/tree/main/week4)

- java script에서 ID 대신 class를 사용해 여러 요소를 조작할때는 주로 getElementsByClassName() 메소드 사용
- ID는 페이지에서 고유해야 하기 때문에 한 번에 하나의 요소만 선택할 수 있음
- class는 여러 요소에 동일한 이름을 부여하여 그룹으로 다룰 수 있음
- getElementsByClassName()을 사용하면 해당 클래스 이름을 가진 모든 요소를 배열과 유사한 형태로 가져옴

- getElementsByClassName()의 동작 방식
    - getElementsByClassName() 메소드는 주어진 클래스 이름을 가진 요소들을 HTMLCollection으로 반환함. 이 HTMLCollection은 배열과 유사하지만, 엄밀히는 배열이 아니므로 배열 메소드(forEach, map 등)를 바로 사용할 수 없음. 대신 반복문을 통해 각 요소를 순회하며 스타일이나 속성 등을 변경 할 수 있음.

- 사용예시
```javascript
const buttons = document.getElementsByClassName('my-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'blue';
}
```
- 여기서 buttons는 배열처럼 동작하며, 모든 my-button 클래스를 가진 요소들이 선택됨. 그 다음 for 반복문을 사용해 각 버튼의 배경색을 파란색으로 변경함.
