'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.createTable('connectors', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            login: Sequelize.STRING,
            password: Sequelize.STRING,
            host:Sequelize.STRING,
            port: Sequelize.STRING,
            isPeriodic: Sequelize.BOOLEAN,
            audioSource: Sequelize.STRING,
            active: Sequelize.BOOLEAN
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('connectors');
    }
};
