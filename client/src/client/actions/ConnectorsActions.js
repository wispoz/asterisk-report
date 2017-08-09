import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../repositories/ConnectorsRepository';

const ConnectorsActions = {
    loadConnectors() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_CONNECTORS_REQUEST
        });

        api.listConnectors()
            .then(({data}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_CONNECTORS_SUCCESS,
                    comments: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_CONNECTORS_FAIL,
                    error: err
                })
            );
    },

    createConnector(connector) {
        api.createConnector(connector)
            .then(() =>
                this.loadComments()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteConnector(connectorId) {
        api.deleteConnector(connectorId)
            .then(() =>
                this.loadConnectors()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default ConnectorsActions;