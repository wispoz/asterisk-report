/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 15:49
 */

import axios from 'axios';
import {apiPrefix} from '../config/config.json';

export default {
    listGroups() {
        return axios.get(`${apiPrefix}/groups/index`);
    },

    createGroup(data) {
        return axios.post(`${apiPrefix}/groups/create`, data);
    },

    deleteGroup(groupId) {
        return axios.delete(`${apiPrefix}/groups/delete/${groupId}`);
    }
};
