//불러오기
import React from "react"

//정의하기
class Customer extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p> 
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}

//내보내기
export default Customer;