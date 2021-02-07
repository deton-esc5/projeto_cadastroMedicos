const { Create_medicos, Especialidades } = require ('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const MedicosConsultar = {

    index: async(req, res) =>{
        const {id} = req.params;
        const medico = await Create_medicos.findByPk(id);
        let especialidades = await Especialidades.findAll();
        
        return res.render('consultar', {medico, especialidades});
    }
    
    }
    
    module.exports = MedicosConsultar;