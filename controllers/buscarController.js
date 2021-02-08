const { Create_medicos } = require('../models')
const MedicosController = require('../controllers/medicosController')

const Sequelize = require('sequelize');
const Op = Sequelize.Op

const BuscarController = {

search: async(req, res) =>{

    const {key} = req.query

    const medicos = await Create_medicos.findAll({
        where:{
            nome:{
                [Op.like]:`%${key}%`
            },
        },
        
    });


    return res.render('index', {medicos});
},

}

module.exports = BuscarController;