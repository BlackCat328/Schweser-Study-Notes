import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = () => {
        axios.get('http://localhost:5000/students').then(
            res => {
                console.log('成功了', res.data)
            },
            err => {
                console.log('失败了', err)
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点击获取学生数据</button>
            </div>
        )
    }
}
