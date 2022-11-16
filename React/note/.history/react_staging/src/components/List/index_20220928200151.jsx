import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    //解构 props中的 userList
    const { userList } = this.props

    return (
      <div className="row">
        {
          userList.map(userObj => {
            return (
              <div className="card" key={userObj.id}>
                <a rel="noreferrer" href={userObj} target="_blank">
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
