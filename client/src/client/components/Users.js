import React, {Component} from 'react';
import {HeaderBar} from 'adminlte-reactjs';
import NavigationMenu from '../components/NavigationMenu';
import UsersGrid from './users/UsersGrid';

const Users = React.createClass({

    render() {
        return <div className="row">
            <HeaderBar/>
            <NavigationMenu/>
            <div className="content-wrapper">
                <UsersGrid/>
            </div>
        </div>;
    }
});
export default Users;