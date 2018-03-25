import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../../routes';

// key={Math.random()} obviously it changes all components states to their default states

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router key={Math.random()} history={history} routes={routes} />
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
