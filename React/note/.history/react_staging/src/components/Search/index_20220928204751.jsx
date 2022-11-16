import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {

  //搜索按钮回调
  search = () => {
    //解构Element的value (连续解构赋值+重命名)
    const { keyWordElement: { value: keyWord } } = this
    //解构出props中的方法
    const { updateAppState } = this.props
    //发送请求前通知App更新状态
    
    //发送请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      res => {
        //拿到用户列表数据
        const { items } = res.data
        //调用 updateAppState,更新 App组件 里面的 userList
        updateAppState(items)
      },
      err => {
        //失败回调
        console.log('失败了', err)
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
