import React from 'react';
import Users from './client/pages/Users';
import Comments from './client/pages/Comments';
import Main from './client/pages/Main';
import Groups from './client/pages/Groups';
import GroupsStore from './client/stores/GroupsStore';
import CommentsStore from './client/stores/CommentsStore';
import GroupsActions from './client/actions/GroupsActions';
import CommentsActions from './client/actions/CommentsActions';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';

function getStateFromFlux() {
    return {
        _isLoading: GroupsStore.isLoading(),
        groups: GroupsStore.getGroups(),
        comments: CommentsStore.getComments()
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
            comments:[]
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        GroupsActions.loadGroups();
        CommentsActions.loadComments();
    }

    componentDidMount() {
        GroupsStore.addChangeListener(this._onChange);
        CommentsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        GroupsStore.removeChangeListener(this._onChange);
        CommentsStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }

    render() {
        const {groups, comments} = this.state;
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(props) => <Main groups={groups} {...props}/>}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/comments" render={(props) => <Comments comments={comments} {...props}/>}/>
                    <Route exact path="/groups" render={(props) => <Groups groups={groups} {...props}/>}/>
                </div>
            </Router>
        );
    }
}

export default App;
