import React from 'react';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';
import i18n from './i18n.json';

const UserForm = React.createClass({
    getInitialState() {
        return {
            "username": "",
            "last_name": "",
            "phone": ""
        };
    },
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    },

    handleLastNameChange(event) {
        this.setState({last_name: event.target.value});
    },
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    },

    handleUserAdd() {
        const newUser = {
            username: this.state.username,
            last_name: this.state.last_name,
            phone: this.state.phone
        };
        this.props.onUserAdd(newUser);
        this.setState({
            "username": "",
            "last_name": "",
            "phone": ""
        });
    },
    render() {
        const {ru} = i18n;
        const i18N = ru, boxTools = ['expand'];
        return <Box
            border={true}
            boxTools={boxTools}
            width="12"
            //collapsed={true}
            theme="box-default"
            title={i18N.header}
            headerMarkup={<i className="fa fa-user"></i>}>
            <div className="box-footer">
                <form action="#" method="post">
                    <div className="row">
                        <div className="col-sm-3">
                            <input
                                type="text" className="form-control input-sm"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                placeholder={i18N.form.username.placeholder}
                            />
                        </div>
                        <div className="col-sm-3">
                            <input
                                type="text" className="form-control input-sm"
                                value={this.state.last_name}
                                onChange={this.handleLastNameChange}
                                placeholder={i18N.form.username.placeholder}
                            />
                        </div>
                        <div className="col-sm-2">
                            <input
                                type="text" className="form-control input-sm"
                                value={this.state.phone}
                                onChange={this.handlePhoneChange}
                                placeholder={i18N.form.username.placeholder}
                            />
                        </div>
                        <div className="col-sm-3">
                            <input
                                value={i18N.add}
                                type="button"
                                onClick={this.handleUserAdd}
                                className="btn btn-success"
                            />
                        </div>
                    </div>
                </form>
            </div>

        </Box>;
    }
});


export default UserForm;