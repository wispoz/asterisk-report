import db from '../etc/db';
import Comment from '../models/Comment';

export function createComment(data) {
    return db.sync().then(() => Comment.create(data));
}

export function listUsers() {
    return Comment.findAll({order: [['id', 'DESC']]});
}

export function deleteUser(commentId) {
    return db.sync().then(() => Comment.find({id: commentId})).then((comment) => comment.destroy());
}

export function updateComment() {

}