'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Create_medicos extends Model {

};

  Create_medicos.init({
    nome: DataTypes.STRING,
    crm: DataTypes.STRING,
    telefone: DataTypes.STRING,
    celular: DataTypes.STRING,
    cep: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    especialidade1: DataTypes.INTEGER,
    especialidade2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Create_medicos',
    timestamps:false,
  });
  return Create_medicos;
};