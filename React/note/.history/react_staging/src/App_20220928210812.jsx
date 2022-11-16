import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    

    render() {
        //解构
        const { updateAppState } = this

        return (
            <div className="container">
                <Search updateAppState={updateAppState} />
                <List />
            </div>
        )
    }
}
