import React from 'react';
import {Toggle, TextField, Dialog, RaisedButton, Divider, Snackbar, LinearProgress} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import ConnectorsActions from '../../actions/ConnectorsActions';
import ConnectorsStore from '../../stores/ConnectorsStore';

class ConnectorsDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.onShowSnack = this.onShowSnack.bind(this);
        this.onHostChange = this.onHostChange.bind(this);
        this.onPortChange = this.onPortChange.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPeriodicChange = this.onPeriodicChange.bind(this);
        this.onConnectionTest = this.onConnectionTest.bind(this);
        this.onDatabaseChange = this.onDatabaseChange.bind(this);
        this._onConnectionTest = this._onConnectionTest.bind(this);
        this.handlerSnackClose = this.handlerSnackClose.bind(this);
        this.onConnectorAdd = this.onConnectorAdd.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this._onChange = this._onChange.bind(this);
        this.state = {
            open: false,
            snackOpen: false,
            showLoading: false,
            host: '127.0.0.1',
            port: 3306,
            login: '',
            name: '',
            database: 'asterisk',
            snackText: 'Успешно',
            password: '',
            isPeriodic: true
        };

    }

    onConnectorAdd() {
        this.setState({showLoading: true, open: false});
        const Connector = {
            host: this.state.host,
            port: this.state.port,
            name: this.state.name,
            login: this.state.login,
            password: this.state.password,
            database: this.state.database,
            isPeriodic: this.state.isPeriodic
        };
        ConnectorsActions.createConnector(Connector);
    }

    _onChange() {
        this.setState({
            open: false,
            snackOpen: false,
            showLoading: false,
            host: '127.0.0.1',
            port: 3306,
            login: '',
            name: '',
            database: 'asterisk',
            password: '',
            isPeriodic: true
        });
    }

    _onConnectionTest() {
        const {success, message} = ConnectorsStore.getTestResponse();
        this.setState({
            snackOpen: true,
            showLoading: false,
            snackText: message
        });
    }

    componentDidMount() {
        ConnectorsStore.addConnectionTestListener(this._onConnectionTest);
        ConnectorsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ConnectorsStore.removeConnectionTestListener(this._onConnectionTest);
        ConnectorsStore.removeChangeListener(this._onChange);
    }

    onConnectionTest() {
        this.setState({showLoading: true});
        const Connector = {
            host: this.state.host,
            port: this.state.port,
            name: this.state.name,
            login: this.state.login,
            password: this.state.password,
            database: this.state.database,
            isPeriodic: this.state.isPeriodic
        };
        ConnectorsActions.checkConnection(Connector);
    }

    onPortChange(e) {
        this.setState({
            port: e.target.value
        });
    }

    onDatabaseChange(e) {
        this.setState({
            database: e.target.value
        });
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onLoginChange(e) {
        this.setState({
            login: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onPeriodicChange(e) {
        this.setState({
            isPeriodic: e.target.value
        });
    }

    onHostChange(e) {
        this.setState({
            host: e.target.value
        });
    }

    onShowSnack() {
        this.setState({showLoading: true});
    }

    handlerSnackClose() {
        this.setState({
            snackOpen: false,
            snackText: 'Успешно',
        });
    }

    handleRequestClose() {
        this.setState({
            open: false,
            snackOpen: false,
            showLoading: false,
            host: '127.0.0.1',
            port: 3306,
            login: '',
            name: '',
            database: 'asterisk',
            password: '',
            isPeriodic: true
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
        const {muiTheme} = this.props;
        return <div>

            <Dialog
                open={this.state.open}
                title="Добавление сервера астериска"
                onRequestClose={this.handleRequestClose}
            >
                <div>
                    <List><TextField
                        hintText="Название соединения"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        floatingLabelText="Название соединения"
                    /></List>

                    <List>
                        <TextField
                            hintText="Адрес сервера"
                            value={this.state.host}
                            onChange={this.onHostChange}
                            floatingLabelText="Адрес сервера"
                        />
                        <TextField
                            hintText="Порт"
                            value={this.state.port}
                            onChange={this.onPortChange}
                            floatingLabelText="Порт"
                        />
                        <TextField
                            hintText="База"
                            value={this.state.database}
                            onChange={this.onDatabaseChange}
                            floatingLabelText="База"
                        />
                    </List>
                    <List>
                        <TextField hintText="Логин" onChange={this.onLoginChange} value={this.state.login}
                                   floatingLabelText="Логин"/>
                        <TextField hintText="Пароль" onChange={this.onPasswordChange} value={this.state.password}
                                   floatingLabelText="Пароль" type="password"/>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem primaryText="Messages" onChange={this.onPeriodicChange}
                                  value={this.state.isPeriodic} rightToggle={<Toggle/>}/>
                    </List>
                    <List>
                        <div>

                            <RaisedButton label="Тест" onTouchTap={this.onConnectionTest}/>
                            <RaisedButton label="Сохранить" onTouchTap={this.onConnectorAdd}/>
                        </div>
                        {this.state.showLoading ? <LinearProgress mode="indeterminate"/> : ''}
                    </List>

                </div>
            </Dialog>
            <RaisedButton
                label="Добавить"
                secondary={true}
                onTouchTap={this.handleTouchTap}
            />
            <Snackbar
                open={this.state.snackOpen}
                message={this.state.snackText}
                autoHideDuration={2000}
                onRequestClose={this.handlerSnackClose}
            />
        </div>;
    }
}

export default ConnectorsDialog;
