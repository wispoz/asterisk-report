import db from '../etc/db';
import Comment from '../models/Comment';

export function createComment(data) {
    return db.sync().then(() => Comment.create(data));
}

export function listComments() {
    return Comment.findAll({order: [['id', 'DESC']]});
}

export function deleteComment(commentId) {
    return Comment.find({
        where: {
            id: commentId
        }
    }).then((comment) => comment.destroy());
}

export function updateComment() {

}