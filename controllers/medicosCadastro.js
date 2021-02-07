const { Create_medicos, Especialidades } = require ('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const MedicosCadastro = {

    create: async(req, res) =>{
        let especialidades = await Especialidades.findAll();
     
        return res.render('cadastro', {especialidades});
    },
        
    store: async(req, res) => {
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

        const resultado = await Create_medicos.create({
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
        });

        return res.redirect('/')
    },
    
};
    
module.exports = MedicosCadastro;