import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import Root from './components/Root/Root';
import configureStore from './store/configureStore';

// Configurate store by using an initial state
const store = configureStore();

// Render DOM by replacing the 'app' element by our AppContainer
const renderDOM = (RootComponent) => {
    render(
        <AppContainer>
            <RootComponent store={store} history={browserHistory} />
        </AppContainer>,
        document.getElementById('app')
    );
};

renderDOM(Root);

// If HMR is enabled, try to re-render the Root component after  hot-reload
if (module.hot) {
    module.hot.accept('./components/Root/Root', () => {
        const NewRoot = require('./components/Root/Root').default;
        renderDOM(NewRoot);
    });
}
