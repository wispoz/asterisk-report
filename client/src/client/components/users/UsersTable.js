import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
import UserForm from './UserForm';
import UserStore from '../../stores/UserStore';
import UsersActions from '../../actions/UsersActions';
import i18n from './i18n.json';
import Masonry from 'react-masonry-component';
import User from './User';

function getStateFromFlux() {
    return {
        isLoading: UserStore.isLoading(),
        users: UserStore.getUsers()
    };
}

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        UsersActions.loadUsers();
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    }

    handleUserAdd(userData) {
        UsersActions.createUser(userData);
    }

    render() {
        const {users} = this.state;
        const {ru} = i18n;
        const i18N = ru;
        const masonryOptions = {
            itemSelector: '.User',
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        };
        return <section className="content">

            <div className="row"><UserForm onUserAdd={this.handleUserAdd.bind(this)}/></div>
            <div className="row"><Box
                border={true}
                width="12"
                theme="box-default"
                headerMarkup={<i className="fa fa-user"></i>}>
                <Masonry options={masonryOptions}>
                    {users.map(user =>
                        <User theme='bg-aqua'
                              key={user.id}
                              user={user}></User>
                    )}
                </Masonry>
            </Box></div>
        </section>;
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }
}

export default UsersTable;