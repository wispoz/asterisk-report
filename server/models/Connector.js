import db from '../etc/db';
import {DataTypes} from 'sequelize';

const Group = db.define('connectors', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    database: DataTypes.STRING,
    description: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    host: DataTypes.STRING,
    port: DataTypes.STRING,
    isPeriodic: DataTypes.BOOLEAN,
    audioSource: DataTypes.STRING,
    active: DataTypes.BOOLEAN
}, {
    timestamps: false
});
export default Group;