import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = 
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
