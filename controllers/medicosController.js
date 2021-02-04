const { Create_medicos } = require('../models')

const Sequelize = require('sequelize');
const Op = Sequelize.Op

const MedicosController = {

index: async(req, res) =>{
    let medicos = await Create_medicos.findAll();

    console.log(medicos)

    return res.render('index', {medicos})
}

}

module.exports = MedicosController;