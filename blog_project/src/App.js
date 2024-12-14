/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {

  let post = "강남 우동 맛집"
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);

  let [따봉, 따봉변경] = useState(0);
  

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

      <div className="list inner_box">
        <h2>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>좋아요</span> {따봉} </h2>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;