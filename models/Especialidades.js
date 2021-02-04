'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especialidades extends Model {

    static associate(models) {

    /*Especialidades.hasMany(models.Create_medicos, { 
     through: 'Create_medicos',
     as: 'create_medicos',
     foreignKey: 'id'})*/
};
  };
  Especialidades.init({
    especialidade: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Especialidades',
  });
  return Especialidades;
};
