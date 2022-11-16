//创建'外壳'组件App
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
im

//创建并暴露App
export default class App extends Component {
    render() {
        return (
            <div className="todo-container">
                < className="todo-wrap">
                    <Header/>
                    <List/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
