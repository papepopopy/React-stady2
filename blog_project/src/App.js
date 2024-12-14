import { useState } from "react";
import "./App.css";

function App() {

  // let post = "강남 우동 맛집"
  // var data = "red";
  let {title, setTitle} = useState(["남자코트 추천", "강담 우동 맛집", "파이썬 독학"]);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      {/* 상단메뉴 */}
      <div className="black-nav">
        <h4>ReactBlog</h4>
        {/* <div>{post}</div>  */}
        {/* 강남 우동 맛집 출력 */}
        {/* <div className={data}>데이터 바인딩</div> */}
        {/* <div className="red"></div> */}
        {/* <div style={{color:"blue", fontSize:"30px"}}>스타일 테스트</div> */}
        {/* {속성명:"속성값"} */}
      </div>
      <button onClick={()=> {
        let copy = [...title];
        copy.sort();
        setTitle(copy)
      }}>정렬버튼</button>
      <div className="inner_box">
        <h5>{title}</h5>
        <p>2월 17일 발행</p>
        <span onClick={() => {setLike(like + 1)}}>좋아요{like}</span>
      </div>
      <div className="inner_box">
        <h5>{title}</h5>
        <p>2월 17일 발행</p>
      </div>
      <div className="inner_box">
        <h5>{title}</h5>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == true ? <Modal></Modal> : null
      }
      <Modal />
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;