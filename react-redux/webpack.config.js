const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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
                        require.resolve('@babel/preset-typescript'),
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
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ]
}