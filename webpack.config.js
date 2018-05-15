let publicPath = '/';

let HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.jsx'
    },
    output: {
        filename: '[name].[hash:6].js',
        path: __dirname + '/dist',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader', options: { 
                                javascriptEnabled: true,
                                modifyVars:{
                                    '@icon-url': '"' + ( publicPath || '/' ) + 'static/font_148784_v4ggb6wrjmkotj4i' + '"',
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.jsx?$/i,
                exclude:'/node_modules/',
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: '[name].[hash:6].css' }),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}
