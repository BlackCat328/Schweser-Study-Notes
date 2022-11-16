import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  //全选checkbox的回调
  handleCheckAll = e => {
    this.props.checkAllTodo(e.target.checked)
  }

  //清楚所有已完成的todo
  clearAllDone = () => {
    this.props.clearAllDone()
  }

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
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
