import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

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
                            <Link className="list-group-item" to="/about">About</Link>
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
