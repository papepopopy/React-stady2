import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import {data} from './data.js'

function App() {

  let [shoes] = useState(data)
  console.log(shoes)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'>
      {/* <div className='main-bg' style={{backgroundImage: 'url({'+mainBg+'})'}}> */}
      </div>
      <div className='container'>
        <div className='row item-box'>
            {
              shoes.map(function(a, i) {
                return <Item key={i} title={a.title} price={a.price}/>
              })
            }
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return(
    <>
        <div className='col-md-4 box'>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg'/>
          <h4>{props.title}</h4>
          <p>{props.price}</p>
        </div>
    </>
  )
}

export default App;
