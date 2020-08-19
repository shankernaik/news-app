var webpack = require('webpack');

module.exports = {
    entry : './src/index.jsx',

    output : {
        path :'/dist/assets/',
        filename : 'bundle.js',
        publicPath : '/assets'
    },

    devServer: {
        inline: true,
        contentBase: './dist',
        port: 9080
    },

    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /(node_modules)/,
                use: {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-react', '@babel/preset-env' /*'@babel/preset-es2015'*/],
                    }
                }
            },
            {
                test : /\.(css)$/,
                loader : 'style-loader!css-loader',
            },
        ]
    }


}