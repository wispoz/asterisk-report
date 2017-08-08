import React, {Component} from 'react';
import {
    HeaderBar,
    ContainerOne,
    ControlPanel,
    AreaChart,
    ContainerTwo,
    ContainerThree,
    ContainerFour,
    ContainerFive,
    ContainerSix,
    ContainerSeven,
    DonutChart,
    WorldMap, ChatBox, Conversations, Contacts, Box
} from 'adminlte-reactjs';
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