import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _connectors = [];
let _loadingError = null;
let _isLoading = true;

function formatConnector(connector) {
    return {
        id: connector.id,
        name: connector.name
    };
}

const ConnectorsStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getConnectors() {
        return _connectors;
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
        case AppConstants.LOAD_CONNECTORS_REQUEST: {
            _isLoading = true;
            ConnectorsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_CONNECTORS_SUCCESS: {
            _isLoading = false;
            _connectors = action.connectors.map(formatConnector);
            _loadingError = null;
            ConnectorsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_CONNECTORS_FAIL: {
            _loadingError = action.error;
            ConnectorsStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default ConnectorsStore;