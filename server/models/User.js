import db from '../etc/db';
import {DataTypes} from 'sequelize';

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    login: DataTypes.STRING,
    username: DataTypes.STRING,
    last_name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    phone: DataTypes.STRING
}, {
    timestamps: false
});
export default User;