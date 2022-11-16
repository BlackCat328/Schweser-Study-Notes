'use strict';

const path = require('path')

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/in'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production'
}