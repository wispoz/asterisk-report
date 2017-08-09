/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 15:39
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../repositories/GroupRepository';

const GroupsActions = {
    loadGroups() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_GROUPS_REQUEST
        });

        api.listGroups()
            .then(({data}) =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_GROUPS_SUCCESS,
                    groups: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: Constants.LOAD_GROUPS_FAIL,
                    error: err
                })
            );
    },

    createGroup(group) {
        api.createGroup(group)
            .then(() =>
                this.loadGroups()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteGroup(groupId) {
        api.deleteGroup(groupId)
            .then(() =>
                this.loadGroups()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default GroupsActions;