/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState("");
  let  [선택한글, 선택한글변경] = useState(0);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${today.getMonth()+1}. ${today.getDate()}`;
  
  const changeText = () => {
    let copy = [...글제목]
    copy.unshift(입력값);
    //unshift() => 새로운 요소를 배열의 맨 앞에 추가
    글제목변경(copy);
  }

  const deletePost = () => {
    let copy = [...글제목]
    copy.splice(선택한글, 1); //선택 항목 제거
    글제목변경(copy) //상태 업데이트
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h1>블로그</h1>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = "여자 코트 추천"
        글제목변경(copy);
      }}>글 수정</button>

      <br />

      <input onChange={(e) => {
        // console.log(e.target.value)
        입력값변경(e.target.value);
        console.log(입력값);
      }}></input>
 
      <button onClick={changeText}>글 발행</button>

      {/* Modal */}
      {
        modal == true ? <Modal 
        setModal={setModal} 
        글제목변경={글제목변경} 
        글제목 = {글제목[선택한글]} 
        deletePost = {() => {
          deletePost(선택한글)
        }} /> : null
      }

      {/* 글 목록 */}
      {
        글제목.map(function(a, i) {
          return (
            <div className="list inner_box" key={i}>
              <h2 onClick={() => {
                setModal(true); //모달창 열림
                선택한글변경(i) // 선택된 글 저장
              }}>{a} </h2>
              <span onClick={(e) => {
                  e.stopPropagation();

                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>좋아요</span> {따봉[i]}
              <p>{formattedDate}</p>
            </div>
          )
        })
      }
    </div>
  );
}

function Modal(props){
  return(
    <>
      <div className="modal">
        <h4>{props.글제목}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <br />
        <button onClick={() => {props.setModal(false)}}>닫기</button>
        {/* <button onClick={() => {props.글제목변경(["여자 코트 추천", "강남 우동 맛집", "파이썬 독학"])}}>수정</button> */}
        <button onClick={() => {
            props.deletePost();
          }}>삭제</button>
      </div>
    </>
  )
}

export default App; 