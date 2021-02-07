const { Create_medicos, Especialidades } = require ('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const MedicosEditar = {

edit: async(req, res) =>{
    const {id} = req.params;
    const medico = await Create_medicos.findByPk(id);
    let especialidades = await Especialidades.findAll();
    return res.render('editar', {medico, especialidades});
},

update: async(req, res) =>{
    const {id} = req.params;
    const {
        nome,
        crm,
        telefone,
        celular,
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        especialidade1,
        especialidade2
    } = req.body;

   await Create_medicos.update({
        nome,
        crm,
        telefone,
        celular,
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        especialidade1,
        especialidade2
    },{
        where:{
            id
        }
    });

    
    return res.redirect('/');
    
    }

}

module.exports = MedicosEditar;