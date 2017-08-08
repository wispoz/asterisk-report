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

class Comments extends React.Component {
    render() {
        return <div>
            <HeaderBar/>
            <NavigationMenu/>
            <div className="content-wrapper">
                {this.props.children}
            </div>
        </div>;
    }
}

export default Comments;