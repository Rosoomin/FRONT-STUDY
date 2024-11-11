# FrontStudy week9

- [과제 배포 링크](https://front-study-igtix3n1b-rosoomins-projects.vercel.app)

- React 프로젝트에서 npm start 명령어를 실행시키는 방법.
    -- 1.React  앱 생성(예시):
    ```javascript
    npx create-react-app week9
    ```
    -- 2. 프로젝트 폴더로 이동:
    ```javascript
    cd week9
    ```
    -- 3. 개발 서버 실행:
    ```javascript
    npm start
    ```
- React 기본개념
    - 컴포넌트 (Component): React 애플리케이션의 기본단위로, UI의 독립적인 부분을 캡슐화함. 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나뉨.
        \- 함수형 컴포넌트:
        ```javascript
        function Welcome(props) {
        return <h1>안녕하세요, {props.name}</h1>;
        }
        ```
        \- 클래스형 컴포넌트:
        ```javascript
        class Welcome extends React.Component {
        render() {
        return <h1>안녕하세요, {this.props.name}</h1>;
            }
        }
        ```
    - JSX: JavaScript XML의 줄임말로, React에서 HTML을 작성할 수 있게 도와주는 문법. 브라우저에서 직접 실행되기 전에 JavaScript로 변환됨
        ```javascript
        const element = <h1>Hello, World!</h1>;
        ```
    - Props: 컴포넌트 간 데이터를 전달하는 방법. 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용
        ```javascript
        function Welcome(props) {
        return <h1>안녕하세요, {props.name}</h1>;
        }
        <Welcome name="철수" />
        ```
    - State: 컴포넌트 내부에서 동적 데이터를 관리하기 위해 사용되는 객체. 컴포넌트의 상태가 변경되면 UI도 자동으로 업데이트됨
        ```javascript
        import React, { useState } from 'react';

        function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
            </div>
            );
        }
        ```
        

