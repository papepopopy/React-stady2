/* eslint-disable */
//필요없는 워딩 삭제 메시지 안뜨게끔 함

import './App_241214hph.css';
import {useState} from 'react';

function App() {

  //임의의 서버에서 들고온 자료
  let post = "해물 파전"

  // let [title, b] = useState(["파스타", "해물파전", "막걸리", "소주"])
  let [title, setTitle] = useState(0)

  //좋아요
  let [like, afterLike] = useState([0,0,0,0]);
  function likeNum() {
    afterLike(like+1)
  }

  //let [menuTitle, c] = useState(["파스타"])

  let [modal, setModal] = useState(false);

  //selectedTitle에 값을 저장하여 팝업에 전달
  let [selectedTitle, setSelectedTitle] = useState(null);
  
  // [1, 2, 3].map(function(a) {
    //map 사용법
    //console.log(a); 
    // return "123321"
  // })


  // state 변경함수 
  // 기존 값을 바꾸는 함수로 기존과 신규 값이 같으면 변경하지 않음

  return (
    <div className="App">
      <Navi />
      <div className="body">

        <button onClick={() => {
          // let arr = [1, 2, 3];
          // array 해당 1, 2, 3 데이터 위치를 저장해 놓음 
          // 그러므로 object or array 경우 ... 을 사용하여야함

          //title[0] = 'test'; 값을 고정해버림
          let copy = [...title]; // ...는 괄호를 벗기고 변경후 다시 생성
          copy[0] = "글 수정";
          b(copy);
        }}>
          글 수정
        </button>

        <div className="type">
          {/* <div className="btn" onClick={()=>{
              let copyTitle = [...menuTitle];
              copyTitle = "양식";`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
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
            }}>중식</div>*/}
+        </div>
        
        {/* <h4 className="main_title">{menuTitle}</h4> */}

        <ul className="menu">

        {
          title.map(function(a, i) {
            return (
              <li>
                <img className="food-img" src="" alt="음식 이미지"></img>
                <h5 onClick={() => {
                    setModal(true);
                    // setSelectedTitle(title[i])
                    setSelectedTitle(index)
                  }}>{index}</h5>
                <div className="text-box">
                  <span className="date">2024.12.01</span>
                  <span onClick={() => {
                      let likeCn1t = [...like];
                      likeCnt[i]++;
                      afterLike(likeCnt);
                    }}
                  >❤ {like[i]}</span>
                </div>
              </li>
            )
          })
        }
        </ul>
        {/* <Modal /> */}
      </div>
      
      {
        modal == true ? <Modal color={"red"} b={b} title={selectedTitle} /> : null
      }

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
function Modal(props) { //대문자로 이름을 적어야함
  //컴포넌트는 state를 가져다 쓰기가 어렵다...
  return (
    <>
      <div className='modal' style={{background : props.color}}>
        {/* <h4>{props.title}</h4> */}
        <h4>{props.title[settitle]}</h4>
        <p>date</p>
        <p>text</p>
        <button onClick={() => {
            props.title("글 수정 완료")
            // let copy = [...props.title];
            // copy[0] = "글 수정 완료";
            // props.b(copy);

            // let copy = [...props.selectedTitle];
            // copy[0] = "글 수정";
            // b(copy);
          }}
        >
            글 수정
        </button>
      </div>
    </>
  )
}

//연습으로 제작 header
function Navi() {
  return (
    <>
      <h3 className="nav">blog</h3>
    </>
  )
}

export default App;
