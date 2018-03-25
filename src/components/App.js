import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

const App = (props) => (
    <div>
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
