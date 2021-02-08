const { Create_medicos } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const MedicosController = {

index: async (req, res) =>{
    let {page = 1} = req.query
    let {count:total, rows:medicos} = await Create_medicos.findAndCountAll({
        limit:7,
        offset:(page-1) * 7
    });
    let totalPagina =Math.round(total/7)+1
    return res.render('index', {medicos, totalPagina})
},
   

sucesso: async(req, res) =>{

    return res.render('sucesso');

}
}

module.exports = MedicosController;