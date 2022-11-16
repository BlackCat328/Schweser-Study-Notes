import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  /**
   *  状态在哪里，操作状态的方法就在哪里
   */

  state = {
    //标识鼠标移入移出
    mouse: false
  }

  //鼠标移入移出li改状态
  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  //勾选、取消勾选某一个todo的回调
  handleCheck = id => {
    return e => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = id => {

  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
