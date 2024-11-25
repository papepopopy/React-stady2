import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>
                {name}, {children}, {favoriteNumber}
            </div>
        );
    }
}
*/
//const MyComponent = props => {
const MyComponent = ({name, children, favoriteNumber}) => {
    //const {name, children} = props; //비구조화 할당
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br />
            children 값은 {children}입니다.<br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
            <hr />
            
            {/* App 파일의 return <MyComponent>리액트</MyComponent>; 값이 들어가진다.*/}
            {/* 안녕하세요, 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}입니다.  */}
        </div>
    )
};

//기본값 설정
MyComponent.defaultProps = {
    name: '기본 이름'
};
MyComponent.propTypes = {
    name: PropTypes.string, //name 문자열만 전달
    favoriteNumber: PropTypes.number.isRequired
}

/*
const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>
}
*/
/*

    const MyComponent(() => {
        console.log('test');
    })
    const MyComponent(function() {
        console.log('test');
    })

    화살표 함수 
    이 문법은 함수를 파라미터로 전달할 때 유용합니다.
*/
export default MyComponent;
// 다른 파일에서 이 파일을 import 할 때, 위에서 선언한 MyComponent 클래스 불러오기