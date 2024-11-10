import React, { Fragment } from 'react'; //리액트에 불러옴
//css 및 이미지 불러옴
import './App.css';

/*
JSX 코드
ex ))
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  )
}

자바스크립트 형태로 변환 시
ex ))
function App() {
  return React.createElement(
    "div", null, "Hello ", React.createElement("b", null, "react") 
  );
}

*/

function App() { //함수형 컴포넌트
  /*
  const undefined = 'undefined';
  return <>{undefined || '값이 undefined 입니다.'}</>;
  */
  const name = "JSX";
  const name2 = "JSX_test";
  const name3 = "JSX_test2";

  const style = {
    // 인라인 스타일링을 사용해야한다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '15px',
    fontWeight: 'bold'
  };
  return (
    //JSX
    <Fragment>
      
      {name2 === "JSX_test" ? <h1>아래와 동일한 식으로 위와같이 작성이 가능하다.</h1>:null}
      {name3 === "JSX_test2" && <h1>이 방법도 가능하다.</h1>}
      {name3 && <h1>내용</h1>}

      {name === 'JSX' ? (//반환시 하나의 부모 태그로 감싸야한다.
        <>
          <h1 className='react'>{name}</h1>
          <p>
            self-closing 태그 : 선언하면서 동시에 닫는 태그
            <br/>
            ex &#41;&#41; &lt;input /&gt;
          </p>

          <p style={style}>
            JSX 코드란 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼다.<br/>
            해당 코드는 브라우저에서 실행 전 코드가 번들링 되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
            자바스크립트와 JSX를 비교하였을때 가독성이 높고 작성이 쉬움으로 JSX를 사용한다.
          </p>
          <ul>
            <li>
              Fragment 를 사용하여 감싸는 div 요소를 추가하지 않을수 있다.
            </li>
          </ul>
          <h2>const 와 let</h2>
          <p>
            const : 변경이 불가능한 상수 선언
            let : 동적인 값을 담는 변수 선언
          </p>
        </>
      ) : (
        <>
          <h1>name이 일치 하지 않는 경우</h1>
        </>
      )}
    </Fragment>
  );
}

export default App;
