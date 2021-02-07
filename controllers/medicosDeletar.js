const { Create_medicos, Especialidades } = require ('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const MedicosDeletar = {

    destroy: async(req, res) =>{
        const {id} = req.params;

        await Create_medicos.destroy({
           where:{
               id
           }
        });

       return res.redirect('/');
    }
    

}

module.exports = MedicosDeletar;