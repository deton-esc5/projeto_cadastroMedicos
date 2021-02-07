'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Create_medicos', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING(120),
      },
      crm: {
        type:Sequelize.STRING,
      },
      telefone: {
        type:Sequelize.STRING,
      },
      celular: {
        type:Sequelize.STRING,
      },
      cep: {
        type:Sequelize.STRING,
      },
      rua: {
        type:Sequelize.STRING,
      },
      numero:{
        type:Sequelize.STRING,
      },
      complemento: {
        type:Sequelize.STRING,
      },
      bairro: {
        type:Sequelize.STRING,
      },
      cidade: {
        type:Sequelize.STRING,
      },
      estado: {
        type:Sequelize.STRING,
      },
      especialidade1: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Especialidades',
          key: 'id'}
        },
      },
      especialidade2: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Especialidades',
          key: 'id'}
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Create_medicos');

  }
};
