/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 15:26
 */

import db from '../etc/db';
import {DataTypes} from 'sequelize';
const Group = db.define('groups', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    timestamps: false
});
export default Group;