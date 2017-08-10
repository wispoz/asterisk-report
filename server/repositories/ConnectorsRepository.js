import db from '../etc/db';
import Connector from '../models/Connector';
import Sequelize from 'sequelize';
export function createConnector(data) {
    return db.sync().then(() => Connector.create(data));
}

export function listConnectors() {
    return Connector.findAll({order: [['id', 'DESC']]});
}

export function deleteConnector(connectorId) {
    return Connector.find({
        where: {
            id: connectorId
        }
    }).then((connector) => connector.destroy());
}
export function checkConnection(data) {
    const sequelize = new Sequelize(`mysql://${data.login}:${data.password}@${data.host}:${data.port}/${data.database}`);
            return sequelize.authenticate();
}
export function updateConnector() {

}