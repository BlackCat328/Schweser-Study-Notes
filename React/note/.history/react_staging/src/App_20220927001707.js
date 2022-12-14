//创建'外壳'组件App
import React, {Component} from 'react'


//创建并暴露App
export default className App extends Component {
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <div className="todo-header">
                    <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
                <ul className="todo-main">
                    <li>
                    <label>
                        <input type="checkbox"/>
                        <span>xxxxx</span>
                    </label>
                    <button className="btn btn-danger" style="display:none">删除</button>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox"/>
                        <span>yyyy</span>
                    </label>
                    <button className="btn btn-danger" style="display:none">删除</button>
                    </li>
                </ul>
                <div className="todo-footer">
                    <label>
                    <input type="checkbox"/>
                    </label>
                    <span>
                    <span>已完成0</span> / 全部2
                    </span>
                    <button className="btn btn-danger">清除已完成任务</button>
                </div>
                </div>
            </div>
        )
    }
}
