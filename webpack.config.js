const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
// let pathsToClean = ['dist'];

// the clean options to use
let cleanOptions = {
    root: path.resolve(__dirname),
    // exclude: ['shared.js'],
    verbose: true,
    dry: false,
};

module.exports = {
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    devtool: 'source-map',// 打包出的js文件是否生成map文件（方便浏览器调试）
    mode: 'production',
    entry: {
        '$fn': './dist/index.js',
    },
    output: {
        filename: '[name].js',// 生成的fiename需要与package.json中的main一致
        path: path.resolve(__dirname, 'common'),
        libraryTarget: 'window',
        // library: '$fn'
    },
    module: {
        rules: [],
    },
};