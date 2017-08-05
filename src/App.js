import React, {Component} from 'react';
import logo from './logo.svg';
import Main from './client/components/Main';
import './App.css';
import PropTypes from 'prop-types';

import AppDispatcher from './client/dispatcher/AppDispatcher';

class App extends Component {
    render() {
        return (
                <Main/>
        );
    }
}

export default App;
