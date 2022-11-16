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
            {id:1,name:'吃饭',done:true},
            {id:2,name:'睡觉',done:true},
            {id:2,name:'睡觉',done:true},
            {id:2,name:'睡觉',done:true},
        ]
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <List />
                    <Footer />
                </div>
            </div>
        )
    }
}
