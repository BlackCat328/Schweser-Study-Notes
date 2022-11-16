'use strict';

import React from "react";
import ReactDOM from "react-dom";
import pic from './images/logo.png'
import './search.less';

class Search extends React.Component {
    render() {
        return <div className="search-text">
            Search Text搜索内容<img src={ pic }></img>
        </div>;
    }
}

ReactDOM.render(
    <Search></Search>,
    document.getElementById('root')
)