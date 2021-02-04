'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Especialidades', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    
      },
      especialidade: {
        allowNull:false,
        type: Sequelize.STRING(120),
      }
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Especialidades');

  }
};
