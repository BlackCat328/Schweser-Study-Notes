'use strict';

import React from "react";
import ReactDOM from "react-dom";
import pic from './images/常见Loaders.jpg'
import './search.less';

class Search extends React.Component {
    render() {
        return <div className="search-text">
            Search Texts<img src={ pic }></img>
        </div>;
    }
}

ReactDOM.render(
    <Search></Search>,
    document.getElementById('root')
)