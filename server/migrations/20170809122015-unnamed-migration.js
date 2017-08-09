'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('groups', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            description: Sequelize.STRING
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('groups');
    }
};
