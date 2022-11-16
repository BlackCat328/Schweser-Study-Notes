// import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  //搜索按钮回调
  search = async () => {
    //解构Element的value (连续解构赋值+重命名)
    const { keyWordElement: { value: keyWord } } = this

    //发送请求前通知List更新状态
    PubSub.publish('msg', { isFirst: false, isLoading: true })

    //发送请求-------使用axios发送请求
    /*axios.get(`/api1/search/users2?q=${keyWord}`).then(
      res => {
        //拿到用户列表数据
        const { items } = res.data
        //发布消息‘msg’,通知List 更新状态
        PubSub.publish('msg', { userList: items, isLoading: false })
      },
      err => {
        //失败回调
        //发布消息‘msg’,通知List 更新err状态
        PubSub.publish('msg', { err: err.message, isLoading: false })
      }
    )*/

    //发送请求-------使用fetch发送请求
    /* fetch(`/api1/search/users2?q=${keyWord}`).then(
      res => {
        return res.json()
      }
    ).then(
      res => {
        //拿到用户列表数据
        const { items } = res.data
        //发布消息‘msg’,通知List 更新状态
        PubSub.publish('msg', { userList: items, isLoading: false })
      }
    ).catch(
      err => {
        //失败回调
        //发布消息‘msg’,通知List 更新err状态
        PubSub.publish('msg', { err: err.message, isLoading: false })
      }
    ) */

    //使用fetch发送请求-------优化
    const res = await fetch(`/api1/search/users2?q=${keyWord}`)
    const <datagrid></datagrid></datagrid>
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
