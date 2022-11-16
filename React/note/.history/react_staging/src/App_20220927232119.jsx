//创建'外壳'组件App
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

//创建并暴露App
export default class App extends Component {

    state = {
        todos: [
            { id: 1, name: '吃饭', done: true },
            { id: 2, name: '睡觉', done: true },
            { id: 3, name: '打豆豆', done: false },
            { id: 4, name: '游戏', done: false }
        ]
    }

    //用于添加一个todo
    addTodo = todoObj => {
        //获取原todos
        const { todos } = this.state
        //更新对象
        this.setState({
            todos: [todoObj, ...todos]
        })
    }

    //用于更新一个todo对象
    updateTodo = (id, done) => {
        //获取原todos
        const { todos } = this.state
        //匹配处理数据
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        //更新todos
        this.setState({
            todos: newTodos
        })
    }

    //删除一个todo对象
    deleteTodo = id => {
        //获取原todos
        const { todos } = this.state
        //删除指定id的todo对象
        const newTodos = todos.filter(todoObj => todoObj.id !== id)
        //更新todos状态
        this.setState({
            todos: newTodos
        })
    }

    

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={this.state.todos} />
                </div>
            </div>
        )
    }
}
