//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//引入APP
import App from './App'

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>
    
    /* </React.StrictMode> */
)