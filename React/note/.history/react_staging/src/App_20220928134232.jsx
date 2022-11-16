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
        //更新userList
        this.setState({
            userList
        })
    }

    render() {
        const { getUserList } = this
        const { userList } = this.state
        return (
            <div className="container">
                <Search getUserList={getUserList} />
                <List userList={userList} />
            </div>
        )
    }
}
