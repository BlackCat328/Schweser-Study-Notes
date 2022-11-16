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
        //标识是否处于加载中
        isLoading: false,
        //存储请求相关的错误信息
        err: ''
    }

    //获取 userList
    up = userList => {
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
