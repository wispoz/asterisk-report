import config from '../config/config.json';
import Sequelize from 'sequelize';
export default new Sequelize(`mysql://${config.development.username}:${config.development.password}@${config.development.host}:3306/${config.development.database}`);


