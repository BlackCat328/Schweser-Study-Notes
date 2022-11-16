"use strict";

import React from "react";
import ReactDOM from "react-dom";
import './search.css';

class Search extends React.Component {
    render() {
        return <div className="search-">Search Text</div>;
    }
}

ReactDOM.render(
    <Search></Search>,
    document.getElementById('root')
)