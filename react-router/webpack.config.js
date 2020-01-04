const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            require.resolve('@babel/preset-env'),
                            {
                                modules: false,
                                targets: {
                                    esmodules: true
                                }
                            }
                        ],
                        require.resolve('@babel/preset-react')
                    ],
                    plugins: [
                        [
                            '@babel/plugin-proposal-decorators',
                            {
                                legacy: true
                            }
                        ],
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ]
}