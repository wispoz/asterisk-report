import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';
import UserForm from './UserForm';
import UserStore from '../../stores/UserStore';
import UsersActions from '../../actions/UsersActions';
import i18n from './i18n.json';

function getStateFromFlux() {
    return {
        isLoading: UserStore.isLoading(),
        users: UserStore.getUsers()
    };
}


const Users = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },
    componentWillMount() {
        UsersActions.loadUsers();
    },
    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    },
    handleUserAdd(userData) {
        UsersActions.createUser(userData);
    },
    render() {
        const columns = [{key: 'id', name: 'ID'}, {key: 'username', name: 'Title'}];
        const {users} = this.state;
        const rowGetter = rowNumber => users[rowNumber];
        const {ru} = i18n;
        const i18N = ru, boxTools = ['expand'];
        return <section className="content">

            <UserForm onUserAdd={this.handleUserAdd}/>
            <div className="row">
                <ReactDataGrid
                    columns={columns}
                    rowGetter={rowGetter}
                    rowsCount={users.length}
                    minHeight={700}/>
            </div>
        </section>;
    },
    _onChange() {
        this.setState(getStateFromFlux());
    }
});
export default Users;