/* eslint-disable */
//필요없는 워딩 삭제 메시지 안뜨게끔 함

import './App.css';
import {useState} from 'react';

function App() {

  //임의의 서버에서 들고온 자료
  let post = "해물 파전"

  let [title, b] = useState(["파스타", "해물파전", "막걸리", "소주"])
  let [like, afterLike] = useState(0);
  //let [menuTitle, c] = useState(["파스타"])

  function likeNum() {
    afterLike(like+1)
  }
  
  // state 변경함수 
  // 기존 값을 바꾸는 함수로 기존과 신규 값이 같으면 변경하지 않음

  return (
    <div className="App">
      <Navi />
      <div className="body">

        <button onClick={() => {

          let arr = [1, 2, 3];
          // array 해당 1, 2, 3 데이터 위치를 저장해 놓음 
          // 그러므로 object or array 경우 ... 을 사용하여야함


          //title[0] = 'test'; 값을 고정해버림
          let copy = [...title]; // ...는 괄호를 벗기고 변경후 다시 생성
          copy[0] = "test";
          b(copy);
        }}>
          글 수정
        </button>

        <div className="type">
          {/* <div className="btn" onClick={()=>{
              let copyTitle = [...menuTitle];
              copyTitle = "양식";
              c(copyTitle);
            }}>양식</div>
          <div className="btn" onClick={()=>{
              let copyTitle = [...menuTitle];
              copyTitle = "한식";
              c(copyTitle);
            }}>한식</div>
          <div className="btn" onClick={()=>{
              let copyTitle = [...menuTitle];
              copyTitle = "중식";
              c(copyTitle);
            }}>중식</div>
          <div className="btn" onClick={()=>{
              let copyTitle = [...menuTitle];
              copyTitle = "일식";
              c(copyTitle);
            }}>일식</div> */}
        </div>

        {/* <h4 className="main_title">{menuTitle}</h4> */}

        <ul className="menu">
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[0] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[1] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[2] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[3] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[1] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[2] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[3] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[1] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div> 
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[2] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ title[3] }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div>
          </li>
          <li>
            <img className="food-img" src="" alt="음식 이미지"></img>
            <h5>{ post }</h5>
            <div className="text-box">
              <span className="date">2024.12.01</span>
              <span onClick={likeNum}>❤ {like}</span>
            </div> 
          </li>
        </ul>

        <Modal />
      </div>
    </div>
  );
}

/*
  const Modal = () => {
    return(
    )
  }
*/
{/* 컨포넌트 만드는 법 : function =>  return(html) => <함수명></함수명> */}
function Modal() { //대문자로 이름을 적어야함
  //컴포넌트는 state를 가져다 쓰기가 어렵다...
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>date</p>
        <p>text</p>
      </div>
    </>
  )
}

//엽습으로 제작 header
function Navi() {
  return (
    <>
      <h3 className="nav">blog</h3>
    </>
  )
}

export default App;
