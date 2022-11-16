import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {

  handleKeyUp = e => {
    //判断是否是回车按键
    if (e.keyCode !== 13) return
    //解构出props中的addTodo函数
    const { addTodo } = this.props
    //准备好一个todo
    addTodo(e)
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
