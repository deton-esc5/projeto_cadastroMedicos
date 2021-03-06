const { Create_medicos, Especialidades } = require ('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {check, validationResult, body} = require('express-validator')

const MedicosCadastro = {

    create: async(req, res) =>{
        let especialidades = await Especialidades.findAll();
   
        return res.render('cadastro', {especialidades});
    },
        
    store: async(req, res) => {
        const listaDeErrors = validationResult(req);

        if(listaDeErrors.isEmpty()){

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

            return res.redirect('sucesso')
    }else{
        let especialidades = await Especialidades.findAll();
        return res.render('cadastro', {especialidades, errors:listaDeErrors.errors})
    }
    
}
}
    
module.exports = MedicosCadastro;