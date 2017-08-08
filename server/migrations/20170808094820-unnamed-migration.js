'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('comments', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            comment: Sequelize.STRING
        });

    },
    down: function (queryInterface, Sequelize) {
          return queryInterface.dropTable('comments');
    }
};
