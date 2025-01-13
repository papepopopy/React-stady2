import { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import {data} from './data.js'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(data)
  console.log(shoes);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" class="nav-link">Home</Link>
            <Link to="/detail" element={<Detail/>} class="nav-link">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'>
            {/* <div className='main-bg' style={{backgroundImage: 'url({'+mainBg+'})'}}> */}
            </div>
            <div className='container'>
              <div className='row item-box'>
                  {
                    shoes.map(function(a, i) {
                      return <Item key={i} title={a.title} price={a.price} i={i+1}/>
                    })
                  }
              </div>
            </div>
          </>
        } />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>member</div>}/>
          <Route path='location' element={<div>위치정보</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문 시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        {/* <Route path='*' element={<div><br/>없는 페이지 입니다.</div>} /> */}
      </Routes>

      {/* <Routes>
        <Route path="/detail" element={ <Detail/> }/>
      </Routes> */}
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Item(props) {
  return(
    <>
        <div className='col-md-4 box'>
          <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} />
          <h4>{props.title}</h4>
          <p>{props.price}</p>
        </div>
    </>
  )
}

export default App;
