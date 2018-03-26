module.exports =
    process.env.NODE_ENV !== 'production'
        ? require('./Root.dev')
        : require('./Root.prod');
