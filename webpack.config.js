let ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.jsx'
    },
    output: {
        filename: '[name].[hash:6].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
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
                            loader: 'less-loader', options: { javascriptEnabled: true }
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
        new HtmlWebpackPlugin({ template: './template.ejs' })
    ]
}
