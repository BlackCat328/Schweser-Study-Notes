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

    updateTodo = (id, done) => {
        //获取原todos
        const { todos } = this.state
        todos.map(todoObj=>P)
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={this.state.todos} />
                    <Footer />
                </div>
            </div>
        )
    }
}
