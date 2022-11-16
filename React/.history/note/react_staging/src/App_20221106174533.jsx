import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
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
                                <h3>我是Home的内容</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
