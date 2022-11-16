import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home' // 路由组件
import About from './pages/About' // 路由组件
import Header from './components/Header' // 一般组件

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <Link className="list-group-item active" to="/home">Home</Link>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path={'/home'} component={Home}></Route>
                                <Route path={'/about'} component={About}></Route>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
