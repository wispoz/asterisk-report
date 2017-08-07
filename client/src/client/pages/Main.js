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
class Main extends React.Component {
    render(){
        return <div>
            <HeaderBar/>
            <NavigationMenu/>
            <div className="content-wrapper">
                <h1>test</h1>
            </div>
        </div>
    }
}

export default Main;