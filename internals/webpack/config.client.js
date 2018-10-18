const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

// Make NODE_ENV to development by default
const env = process.env.NODE_ENV || 'development';
const isDev = env !== 'production';

function getEntry() {
    const entry = {};
    if (isDev) {
        entry.app = [
            'react-hot-loader/patch',
            'webpack/hot/dev-server',
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
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: isDev,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
            __CLIENT__: true,
            __SERVER__: false,
            __DEV__: isDev,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            filename: '[name].bundle.js',
            name: 'vendors',
            minChunks: Infinity,
        }),
    ];
    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    } else {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                beautify: false,
                mangle: { screw_ie8: true },
                compress: {
                    screw_ie8: true, // React doesn't support IE8
                    warnings: false,
                    unused: true,
                    dead_code: true,
                },
                output: {
                    screw_ie8: true,
                    comments: false,
                },
            }),
            new AssetsWebpackPlugin({
                path: resolve(__dirname, '../../build'),
            })
        );
    }

    return plugins;
}

function getBabelOptions() {
    const plugins = ['transform-object-rest-spread', 'dynamic-import-webpack'];
    const presets = [['env', { modules: false }], 'react'];
    if (isDev) {
        plugins.push('react-hot-loader/babel');
    }
    return {
        cacheDirectory: isDev,
        babelrc: false,
        presets,
        plugins,
    };
}

module.exports = {
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                }),
            },
        ],
    },
    plugins: getPlugins(),
};
