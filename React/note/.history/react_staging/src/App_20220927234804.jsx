import React, { Component } from 'react'
import axiox from 'ax'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点击获取学生数据</button>
            </div>
        )
    }
}
