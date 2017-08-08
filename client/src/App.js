import React, {Component} from 'react';
import Users from './client/pages/Users';
import Comments from './client/pages/Comments';
import Main from './client/pages/Main';
import Groups from './client/pages/Groups';
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
                    <Route exact path="/comments" component={Comments}/>
                    <Route exact path="/groups" component={Groups}/>
                </div>
            </Router>
        );
    }
}

export default App;
