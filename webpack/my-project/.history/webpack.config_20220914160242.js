'use strict';

const path = require('path')

module.exports = {
    d
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production'
}