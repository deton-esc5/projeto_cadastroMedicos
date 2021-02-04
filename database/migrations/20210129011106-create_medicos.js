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
        allowNull:false,
        type: Sequelize.STRING(120),
      },
      crm: {
        allowNull:false,
        type:Sequelize.INTEGER,
      },
      telefone: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      celular: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      cep: {
        allowNull:false,
        type:Sequelize.INTEGER,
      },
      rua: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      numero:{
        allowNull:false,
        type:Sequelize.STRING,
      },
      complemento: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      bairro: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      cidade: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      estado: {
        allowNull:false,
        type:Sequelize.STRING,
      },
      especialidade1: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Especialidades',
          key: 'id'}
        },
        allowNull: false
      },
      especialidade2: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Especialidades',
          key: 'id'}
        },
        allowNull: false
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
