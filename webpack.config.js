const path = require('path')

module = {
    mode: 'development',
    entry: './src/header/header.js',

    output:{
        path: path.resolve(__dirname, './assets'),
        filename: 'main.js'
    }
}