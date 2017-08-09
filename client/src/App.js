import React from 'react';
import Users from './client/pages/Users';
import Comments from './client/pages/Comments';
import Main from './client/pages/Main';
import Groups from './client/pages/Groups';
import GroupsStore from './client/stores/GroupsStore';
import GroupsActions from './client/actions/GroupsActions';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';

function getStateFromFlux() {
    return {
        _isLoading: GroupsStore.isLoading(),
        groups: GroupsStore.getGroups()
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        GroupsActions.loadGroups();
    }

    componentDidMount() {
        GroupsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        GroupsStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }

    render() {
        const {groups} = this.state;
         return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <Main groups={groups} {...props}/>}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/comments" component={Comments}/>
                    <Route exact path="/groups" render={(props) => <Groups groups={groups} {...props}/>}/>
                </div>
            </Router>
        );
    }
}

export default App;
