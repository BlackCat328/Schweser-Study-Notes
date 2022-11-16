import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  render() {

    //解构props中的todos
    const { todos } = this.props
    //已完成个数
    const doneCount = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    //总数
    const total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span> / 全部{2}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
