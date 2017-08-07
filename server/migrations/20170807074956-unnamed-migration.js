'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            login: Sequelize.STRING,
            username: Sequelize.STRING,
            last_name: Sequelize.STRING,
            second_name: Sequelize.STRING,
            phone: Sequelize.STRING
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('users');
    }
};
