import db from '../etc/db';
import User from '../models/User';

export function createUser(data) {
    return db.sync().then(() => User.create(data));
}

export function listUsers() {
    return User.findAll({order: [['id', 'DESC']]});
}

export function deleteUser(userId) {
    return User.find({
        where: {
            id: userId
        }
    }).then((user) => user.destroy());
}

export function updateUser() {

}