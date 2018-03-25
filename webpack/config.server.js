const { resolve } = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    name: 'server',
    target: 'node',
    externals: [
        nodeExternals({
            // Load non-javascript files with extensions, presumably via loaders
            whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
        }),
    ],
    devtool: 'hidden-source-map',
    context: resolve(process.cwd(), 'src'),
    entry: {
        server: './server/index.js',
    },
    output: {
        path: resolve(process.cwd(), 'build'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]_[name]',
                                minimize: true,
                            },
                        },
                        'stylus-loader',
                    ],
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 10000 },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false,
        }),
    ],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true,
    },
};
