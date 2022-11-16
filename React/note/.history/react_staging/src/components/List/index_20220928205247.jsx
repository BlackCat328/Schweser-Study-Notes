import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    //解构 props
    const { userList, isFirst, isLoading, err } = this.props

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字</h2>
        }
      </div>
    )
  }
}
