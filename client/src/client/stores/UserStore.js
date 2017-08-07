import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _users = [];
let _loadingError = null;
let _isLoading = true;

function formatUser(user) {
    return {
        id: user.id,
        username: user.username,
        last_name: user.last_name
    };
}

const UsersStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getUsers() {
        return _users;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.type) {
        case AppConstants.LOAD_USERS_REQUEST: {
            _isLoading = true;
            UsersStore.emitChange();
            break;
        }

        case AppConstants.LOAD_USERS_SUCCESS: {
            _isLoading = false;
            _users = action.users.map(formatUser);
            _loadingError = null;
            UsersStore.emitChange();
            break;
        }

        case AppConstants.LOAD_USERS_FAIL: {
            _loadingError = action.error;

            UsersStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default UsersStore;