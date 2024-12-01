/* eslint-disable */
//필요없는 워딩 삭제 메시지 안뜨게끔 함

import './App.css';
import {useState} from 'react';

function App() {

  //임의의 서버에서 들고온 자료
  let post = "해물 파전"

  let [title, b] = useState(["파스타", "해물파전", "막걸리", "소주"])
  let [like, afterLike] = useState(0);
  let [menuTitle, c] = useState(["양식"])

  function likeNum() {
    afterLike(like+1)
  }
  
  

  return (
    <div className="App">
      <h3 className="nav">blog</h3>
      <div className="body">

        <div className="type">
          <div className="btn" onClick={()=>{
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
            }}>일식</div>
        </div>

        <h4 className="main_title">{menuTitle}</h4>

        <ul className="menu">
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
      </div>
    </div>
  );
}

export default App;
