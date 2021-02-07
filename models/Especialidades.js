'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Especialidades extends Model {

  };
  Especialidades.init({
    especialidade: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Especialidades',
    timestamps:false,
  });
  return Especialidades;
};
