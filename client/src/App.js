import React from 'react';
import Users from './client/pages/Users';
import Comments from './client/pages/Comments';
import Main from './client/pages/Main';
import Groups from './client/pages/Groups';
import GroupsStore from './client/stores/GroupsStore';
import CommentsStore from './client/stores/CommentsStore';
import ConnectorsStore from './client/stores/ConnectorsStore';
import GroupsActions from './client/actions/GroupsActions';
import CommentsActions from './client/actions/CommentsActions';
import ConnectorsActions from './client/actions/ConnectorsActions';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Connectors from "./client/pages/Connectors";

function getStateFromFlux() {
    return {
        _isLoading: GroupsStore.isLoading(),
        groups: GroupsStore.getGroups(),
        comments: CommentsStore.getComments(),
        connectors: ConnectorsStore.getConnectors(),
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            comments:[],
            connectors: []
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        GroupsActions.loadGroups();
        CommentsActions.loadComments();
        ConnectorsActions.loadConnectors();
    }

    componentDidMount() {
        GroupsStore.addChangeListener(this._onChange);
        CommentsStore.addChangeListener(this._onChange);
        ConnectorsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        GroupsStore.removeChangeListener(this._onChange);
        CommentsStore.removeChangeListener(this._onChange);
        ConnectorsStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }

    render() {
        const {groups, comments,connectors} = this.state;
        console.log(connectors);
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <Main groups={groups} {...props}/>}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/comments" render={(props) => <Comments comments={comments} {...props}/>}/>
                    <Route exact path="/groups" render={(props) => <Groups groups={groups} {...props}/>}/>
                    <Route exact path="/connectors" render={(props) => <Connectors connectors={connectors} {...props}/>}/>
                </div>
            </Router>
        );
    }
}

export default App;
