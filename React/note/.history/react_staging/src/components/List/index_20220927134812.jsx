import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.pro
    return (
      <ul className="todo-main">
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    )
  }
}
