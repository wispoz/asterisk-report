import React, {Component} from 'react';
import Users from './client/components/Users';
import Main from './client/pages/Main';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import AppDispatcher from './client/dispatcher/AppDispatcher';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/users" component={Users}/>
                </div>
            </Router>
        );
    }
}

export default App;
