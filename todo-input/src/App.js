import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractive';


const App = () => {
  return <>
        {/* <MyComponent name='React' favoriteNumber={1}>
          리액트
        </MyComponent> */}
        {/* <Counter /> */}
        {/* <Say /> */}
        <EventPractice />
  </>
  //return <MyComponent>리액트</MyComponent>; 
  //return <MyComponent />; //MyComponent에서 name 설정
  //return <MyComponent name="React" />;

  //MyCommponent 컴포넌트 불러오기
};

/*
function App() {
  const name = '리액트'
  return (
    <div className="App">
    </div>
  );
}
*/
/*
class App extends Component {
  render() {
    const name = 'react';
    return <div className='react'>{name}</div>
  }
}
*/
export default App;
