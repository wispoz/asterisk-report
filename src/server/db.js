import config from '../etc/config.json';
import Sequelize from 'sequelize';
export default new Sequelize( `${config.db.database}`, `${config.db.login}`, `${config.db.password}`)