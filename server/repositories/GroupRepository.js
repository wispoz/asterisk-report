/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 15:28
 */
import db from '../etc/db';
import Group from '../models/Group';

export function createGroup(data) {
    return db.sync().then(() => Group.create(data));
}

export function listGroups() {
    return Group.findAll({order: [['id', 'DESC']]});
}

export function deleteGroup(groupId) {
    return Group.find({
        where: {
            id: groupId
        }
    }).then((group) => group.destroy());
}

export function updateGroup() {

}
