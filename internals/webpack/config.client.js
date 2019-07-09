const { resolve } = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

const getBabelOptions = require('../utils/getBabelOptions');

// Make NODE_ENV to development by default
const env = process.env.NODE_ENV || 'development';
const isDev = env !== 'production';

function getEntry() {
    const entry = {};
    if (isDev) {
        entry.app = [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?reload=true&noInfo=true',
            './client.js',
        ];
    } else {
        entry.app = './client.js';
    }
    entry.vendors = [
        'react',
        'react-dom',
        'react-router',
        'redux',
        'react-redux',
        'redux-thunk',
    ];
    return entry;
}

function getPlugins() {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
            __CLIENT__: true,
            __SERVER__: false,
            __DEV__: isDev,
        }),
    ];
    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    } else {
        plugins.push(
            new MiniCSSExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new AssetsWebpackPlugin({
                path: resolve(__dirname, '../../build'),
            })
        );
    }

    return plugins;
}

module.exports = {
    mode: isDev ? 'development' : 'production',
    name: 'client',
    target: 'web',
    cache: isDev,
    entry: getEntry(),
    context: resolve(process.cwd(), 'src'),
    output: {
        filename: '[name].bundle.js',
        path: resolve(process.cwd(), 'build/assets/'),
        publicPath: '/assets/',
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: getBabelOptions(),
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: isDev,
                            quiet: isDev,
                        },
                    },
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    isDev
                        ? 'style-loader'
                        : {
                              loader: MiniCSSExtractPlugin.loader,
                              options: {
                                  hmr: isDev,
                              },
                          },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]_[name]',
                            minimize: !isDev,
                        },
                    },
                    'stylus-loader',
                ],
            },
        ],
    },
    plugins: getPlugins(),
};
