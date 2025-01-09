import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import mainBg from "./img/main-bg.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricsing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'>
      {/* <div className='main-bg' style={{backgroundImage: 'url({'+mainBg+'})'}}> */}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 box'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg'/>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
          <div className='col-md-4 box'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg'/>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
          <div className='col-md-4 box'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg'/>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
