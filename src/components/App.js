import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

import styles from './App.styl';

const App = (props) => (
    <div className={styles.app}>
        <ul>
            <li>
                <IndexLink to="/">Index</IndexLink>
            </li>
            <li>
                <Link to="/think-in-react">Thinking in React</Link>
            </li>
        </ul>
        {props.children}
    </div>
);

App.propTypes = {
    children: PropTypes.node,
};

export default App;
