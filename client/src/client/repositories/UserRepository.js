import axios from 'axios';
import {apiPrefix} from '../config/config.json';

export default {
    listUsers() {
        return axios.get(`${apiPrefix}/users/index`);
    },

    createUser(data) {
        return axios.post(`${apiPrefix}/users/create`, data);
    },

    deleteUser(userId) {
        return axios.delete(`${apiPrefix}/users/delete/${userId}`);
    }
};