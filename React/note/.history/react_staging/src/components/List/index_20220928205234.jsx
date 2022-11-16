import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    //解构 props
    const { userList, isFirst, isLoading, err } = this.props

    return (
      <div className="row">
        {
          isFirst ? <h2>huan'y's</h2>
        }
      </div>
    )
  }
}
