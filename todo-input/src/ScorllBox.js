import React, {Component} from 'react'

class ScrollBox extends Component {

  scrollToBottom = () => {
    const {scrollHeight, clientHeight} = this.box;
    // 비구조화 할당 문법
    // const scrollHeight = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;

    // scrollTop : 세로 스크롤바 위치
    // scrollHeight : 스크롤 박스 안의 div 높이
    // clientHeight : 스크롤 박스의 높이

    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    };

    return (
      <div 
        style={style}
        ref={(ref) => {this.box=ref}}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;