'use strict';

const path = require('path')

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production'
}