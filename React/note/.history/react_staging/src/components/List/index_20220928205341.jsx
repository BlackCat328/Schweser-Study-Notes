import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    //解构 props
    const { userList, isFirst, isLoading, err } = this.props

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : 
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
