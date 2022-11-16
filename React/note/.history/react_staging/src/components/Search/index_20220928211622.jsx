import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  //搜索按钮回调
  search = () => {
    //解构Element的value (连续解构赋值+重命名)
    const { keyWordElement: { value: keyWord } } = this
    //解构出props中的方法
    const { updateAppState } = this.props

    //发送请求前通知List更新状态
    PubSub.publish('msg', { isFirst: true, isLoading: true })

    //发送请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      res => {
        //拿到用户列表数据
        const { items } = res.data
        //发布消息‘msg’,通知List 更新
        PubSub.publish('msg', { userList: items, isLoading: false })
      },
      err => {
        //失败回调
        PubSub.publish('msg', { err: err.message, isLoading: false })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={e => this.keyWordElement = e} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
