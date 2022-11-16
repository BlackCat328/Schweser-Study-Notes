import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {

  search = () => {
    //解构Element的value (连续解构赋值+重命名)
    const { keyWordElement: { value:keyWord } } = this
    //发送请求
    axios.get('https://api.github.com/search/users?q=${}')
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
