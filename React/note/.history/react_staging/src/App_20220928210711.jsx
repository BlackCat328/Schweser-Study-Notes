import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    

    //更新App的state
    updateAppState = stateObj => {
        //更新userList
        this.setState(stateObj)
    }

    render() {
        //解构
        const { updateAppState } = this

        return (
            <div className="container">
                <Search updateAppState={updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
