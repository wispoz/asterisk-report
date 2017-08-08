import axios from 'axios';
import {apiPrefix} from '../config/config.json';

export default {
    listComments() {
        return axios.get(`${apiPrefix}/comments/index`);
    },

    createComment(data) {
        return axios.post(`${apiPrefix}/comments/create`, data);
    },

    deleteComment(commentId) {
        return axios.delete(`${apiPrefix}/comments/delete/${commentId}`);
    }
};