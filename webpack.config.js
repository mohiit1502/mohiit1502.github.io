const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    module: {
        rules: [
            { test: /.js/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /.html/, loader: 'raw-loader', exclude: /node_modules/ },
            { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
            // template: './test.html'
        })
        // new HtmlWebpackPlugin({
        //     template: './public/login.html'
        //     // template: './test.html'
        // })
    ],
    mode: 'development'
};