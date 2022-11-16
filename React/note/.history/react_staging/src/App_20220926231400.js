//创建'外壳'组件App
import React, {Component} from 'react'


//创建并暴露App
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
