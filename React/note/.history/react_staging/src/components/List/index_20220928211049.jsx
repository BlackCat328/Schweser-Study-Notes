import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

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

  componentDidMount = () => {
    PubSub.subscribe('', (data) => {
      console.log(data)
    })
  }

  render() {

    //解构 props
    const { userList, isFirst, isLoading, err } = this.state

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                userList.map(userObj => {
                  return (
                    <div className="card" key={userObj.id}>
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
