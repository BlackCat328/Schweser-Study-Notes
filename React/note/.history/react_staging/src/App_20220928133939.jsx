import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = {
        //初始化用户列表
        userList: []
    }

    getUserList = userList => {

    }

    render() {
        return (
            <div className="container">
                <Search />
                <List></List>
            </div>
        )
    }
}
