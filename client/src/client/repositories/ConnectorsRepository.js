import axios from 'axios';
import {apiPrefix} from '../config/config.json';

export default {
    listConnectors() {
        return axios.get(`${apiPrefix}/connectors/index`);
    },

    createConnector(data) {
        return axios.post(`${apiPrefix}/connectors/create`, data);
    },

    deleteConnector(connectorId) {
        return axios.delete(`${apiPrefix}/connectors/delete/${connectorId}`);
    }
};