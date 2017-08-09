import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _groups = [];
let _loadingError = null;
let _isLoading = true;

function formatGroup(group) {
    return {
        id: group.id,
        name: group.name,
        description: group.description
    };
}

const GroupsStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getGroups() {
        return _groups;
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
        case AppConstants.LOAD_GROUPS_REQUEST: {
            _isLoading = true;
            GroupsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_GROUPS_SUCCESS: {
            _isLoading = false;
            _groups = action.groups.map(formatGroup);
            _loadingError = null;
            GroupsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_GROUPS_FAIL: {
            _loadingError = action.error;
            GroupsStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default GroupsStore;