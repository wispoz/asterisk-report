'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn('connectors', 'database', Sequelize.STRING);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('connectors', 'database');
  }
};
