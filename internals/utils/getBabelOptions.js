const baseOptions = {
    babelrc: false,
};
const basePlugins = [
    'transform-class-properties',
    'transform-object-rest-spread',
    'dynamic-import-webpack',
];
const basePresets = ['env', 'react'];

module.exports = function getBabelOptions(configs = {}) {
    const { env, target, initialOptions } = configs;

    let presets = basePresets,
        plugins = basePlugins,
        otherOptions = {
            ...initialOptions,
            ...baseOptions,
        };

    if (target === 'node') {
        presets = basePresets.map(
            (preset) =>
                preset === 'env'
                    ? [
                          'env',
                          {
                              targets: { node: 'current' },
                              useBuiltIns: 'usage',
                          },
                      ]
                    : preset
        );
    } else if (target === 'browser') {
        if (env !== 'test') {
            // We don't need modules cause Webpack
            // do not required to transpile to ES5 modules
            presets = basePresets.map(
                (preset) =>
                    preset === 'env' ? ['env', { modules: false }] : preset
            );
        } else if (env === 'development') {
            // We need to include react-hot-loader/babel
            // in plugins and set babel-loader to cache
            plugins = plugins.concat(['react-hot-loader/babel']);
            otherOptions = {
                ...otherOptions,
                cacheDirectory: true,
            };
        }
    }

    return {
        presets,
        plugins,
        ...otherOptions,
    };
};
