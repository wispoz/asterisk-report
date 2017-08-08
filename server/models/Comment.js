import db from '../etc/db';
import {DataTypes} from 'sequelize';

const Comment = db.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: DataTypes.STRING
}, {
    timestamps: false
});
export default Comment;