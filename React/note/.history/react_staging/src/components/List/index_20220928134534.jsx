import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    //解构 props中的 userList
    const { userList } = this.props

    return (
      <div className="row">
        <div className="card">
          <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
            <img alt="head_portrait" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: '100px' }} />
          </a>
          <p className="card-text">reactjs</p>
        </div>
        {
          userList.map(userObj=>{
            return (
              
            )
          })
        }
      </div>
    )
  }
}
