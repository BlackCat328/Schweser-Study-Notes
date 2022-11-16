import React, { Component } from 'react'
import
import './index.css'
import { nanoid } from 'nanoid'

export default class Header extends Component {

  handleKeyUp = e => {
    //判断是否是回车按键
    if (e.keyCode !== 13) return
    //判断输入值是否为空
    if (e.target.value.trim() === '') {
      alert('输入值不能为空！！')
      return
    }
    //解构出props中的addTodo函数
    const { addTodo } = this.props
    //准备好一个todoObj
    const todoObj = { id: nanoid(), name: e.target.value, done: false }
    //调用addTodo函数添加todo
    addTodo(todoObj)
    //清空输入
    e.target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
