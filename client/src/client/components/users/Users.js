import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';
import UserForm from './UserForm';
import UserStore from '../../stores/UserStore';
import UsersActions from '../../actions/UsersActions';
import createReactClass from 'create-react-class';
import i18n from './i18n.json';
import Masonry from 'react-masonry-component';
import User from './User';
function getStateFromFlux() {
    return {
        isLoading: UserStore.isLoading(),
        users: UserStore.getUsers()
    };
}


const Users = createReactClass({
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
        const masonryOptions = {
            itemSelector: '.User',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };
        return <section className="content">

            <UserForm onUserAdd={this.handleUserAdd}/>
            <Box
                border={true}
                width="12"
                theme="box-default"
                headerMarkup={<i className="fa fa-user"></i>}>
                <Masonry options={masonryOptions}>
                    {users.map(user=>
                        <User 	theme = 'bg-aqua'
                                        displayName = 'John Roe'
                                        description = 'Founder & CEO'
                                        displayPicture = '../dist/img/user1-128x128.jpg'
                                        coverPicture = '../dist/img/photo4.png'></User>
                    )}
                </Masonry>
            </Box>
        </section>;
    },
    _onChange() {
        this.setState(getStateFromFlux());
    }
});
export default Users;