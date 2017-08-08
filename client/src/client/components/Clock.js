import React, {Component} from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className="pull-left info">
                <p>Alexander Pierce</p>
                <a href="#"><i className="fa fa-circle text-success"></i> {this.state.date.toLocaleTimeString()} {this.state.date.getDate()}.{this.state.date.getMonth()}.{this.state.date.getFullYear()}</a>
            </div>
        );
    }
}
export default Clock;