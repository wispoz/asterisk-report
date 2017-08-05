import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types';
import {
    HeaderBar,
    NavigationMenu,
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

const Main = React.createClass({
    getInitialState() {
        return {
            chatBoxOptions: {
                conversations: [],
                contacts: []
            }
        };
    },
    componentDidMount() {
        let chatBoxOptions = {
            headerTheme: 'box-primary',
            notificationTheme: 'bg-light-blue',
            chatTheme: 'direct-chat-primary',
            buttonTheme: 'btn-primary',
            title: 'Direct Chat',
            notifications: 12,

            conversations: [{
                displayName: 'Alexander Pierce',
                displayPicture: '../dist/img/user1-128x128.jpg',
                date: '23 Jan 2:00 pm',
                message: "Is this template really for free? That's unbelievable!"
            }, {
                align: 'right',
                displayName: 'Sarah Bullock',
                displayPicture: '../dist/img/user3-128x128.jpg',
                date: '23 Jan 2:05 pm',
                message: 'You better believe it!'
            }],

            contacts: [{
                displayName: 'Count Dracula',
                displayPicture: '../dist/img/user1-128x128.jpg',
                link: '#',
                date: '2/28/2015',
                message: 'How have you been? I was...'
            }, {
                displayName: 'Count Dracula',
                displayPicture: '../dist/img/user1-128x128.jpg',
                link: '#',
                date: '2/28/2015',
                message: 'How have you been? I was...'
            }]
        };
        this.setState({
            chatBoxOptions: chatBoxOptions,
        });
    },
    render() {
        const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }];
        const rows = [{ id: 1, title: 'Title 1' }];
        const rowGetter = rowNumber => rows[rowNumber];
        return <div >
            <HeaderBar/>
            <NavigationMenu/>
            <div className="content-wrapper">
                <section className="content">
                <div className="row">
                    <ReactDataGrid
                        columns={columns}
                        rowGetter={rowGetter}
                        rowsCount={rows.length}
                        minHeight={500} />
                </div>
                </section>
            </div>
        </div>;
    }
});
export default Main