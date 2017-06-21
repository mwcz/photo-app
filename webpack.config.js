module.exports = {
    // input
    entry: './src',

    // output
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    // transforms
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['env'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            }
        ]
    },

    // sourcemaps
    devtool: 'source-map',

    // server
    devServer: {
        contentBase: __dirname + '/src',
        compress: true,
        historyApiFallback: true
    }
};
