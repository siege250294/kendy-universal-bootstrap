module.exports =
    process.env.NODE_ENV !== 'production'
        ? require('./configureStore.dev')
        : require('./configureStore.prod');
