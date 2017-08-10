import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';
const CONNECTION_TEST_EVENT = 'connectiontest';

let _connectors = [];
let _loadingError = null;
let _isLoading = true;
let _isTestSuccess = {success:false,message: ''};

function formatConnector(connector) {
    return {
        id: connector.id,
        name: connector.name,
        login:connector.login
    };
}

const ConnectorsStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getConnectors() {
        return _connectors;
    },
    getTestResponse() {
        return _isTestSuccess;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    emitConnectionTest: function () {
        this.emit(CONNECTION_TEST_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    addConnectionTestListener: function (callback) {
        this.on(CONNECTION_TEST_EVENT, callback);
    },

    removeConnectionTestListener: function (callback) {
        this.removeListener(CONNECTION_TEST_EVENT, callback);
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
        case AppConstants.CHECK_CONNECTORS_SUCCESS: {
            const {data} = action;
            _isTestSuccess = data;
            ConnectorsStore.emitConnectionTest();

            break;
        }
        case AppConstants.CHECK_CONNECTORS_FAIL: {
            const {data} = action;
            _isTestSuccess = data;
            ConnectorsStore.emitConnectionTest();

            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default ConnectorsStore;