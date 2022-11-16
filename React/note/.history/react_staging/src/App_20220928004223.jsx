import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import { TouchList } from 'react'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search/>
                <List></List>
            </div>
        )
    }
}
