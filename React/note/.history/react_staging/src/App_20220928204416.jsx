import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = {
        //初始化用户列表
        userList: [],
        //是否为第一次打开页面
        isFirst: true,
        isLoading: false,
        err: ''
    }

    //获取 userList
    getUserList = userList => {
        //更新userList
        this.setState({
            userList
        })
    }

    render() {
        //解构
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
