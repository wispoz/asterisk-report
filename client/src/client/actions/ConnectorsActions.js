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
                    connectors: data
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
                this.loadConnectors()
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
    },
    checkConnection(options) {
        api.checkConnection(options)
            .then(({data}) => {
                    const {success} = data;
                    if(success) {
                        AppDispatcher.dispatch({
                            type: Constants.CHECK_CONNECTORS_SUCCESS,
                            data: data
                        });
                    }else {
                        AppDispatcher.dispatch({
                            type: Constants.CHECK_CONNECTORS_FAIL,
                            data: data
                        });
                    }
                }
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.CHECK_CONNECTORS_FAIL,
                    error: err
                })
            );
    }
};

export default ConnectorsActions;