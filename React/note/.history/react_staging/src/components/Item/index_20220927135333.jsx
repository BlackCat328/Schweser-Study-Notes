import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {id,name,done} = this.props
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>{xxxxx}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>删除</button>
      </li>
    )
  }
}
