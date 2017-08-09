'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.addColumn('users', 'grouId', Sequelize.INTEGER);

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('users', 'grouId');
    }
};
