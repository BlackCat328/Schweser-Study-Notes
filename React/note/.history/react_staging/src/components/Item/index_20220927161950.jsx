import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse: false
  }

  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  render() {
    const { name, done } = this.props
    const {}
    return (
      <li 
      style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }} 
      onMouseEnter={this.handleMouse(true)} 
      onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
