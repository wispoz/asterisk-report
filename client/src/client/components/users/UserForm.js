import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import i18n from './i18n.json';


class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "last_name": "",
            "phone": ""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleUserAdd = this.handleUserAdd.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({last_name: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

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
    }

    render() {
        const {ru} = i18n,
            i18N = ru;
        return <Box
            border={true}
            width="12"
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
                                onChange={this.handleUsernameChange.bind(this)}
                                placeholder={i18N.form.username.placeholder}
                            />
                        </div>
                        <div className="col-sm-3">
                            <input
                                type="text" className="form-control input-sm"
                                value={this.state.last_name}
                                onChange={this.handleLastNameChange.bind(this)}
                                placeholder={i18N.form.last_name.placeholder}
                            />
                        </div>
                        <div className="col-sm-2">
                            <input
                                type="text" className="form-control input-sm"
                                value={this.state.phone}
                                onChange={this.handlePhoneChange.bind(this)}
                                placeholder={i18N.form.phone.placeholder}
                            />
                        </div>
                        <div className="col-sm-3">
                            <input
                                value={i18N.add}
                                type="button"
                                onClick={this.handleUserAdd.bind(this)}
                                className="btn btn-success"
                            />
                        </div>
                    </div>
                </form>
            </div>

        </Box>;
    }
}

export default UserForm;