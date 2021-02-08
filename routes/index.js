var express = require('express');
var router = express.Router();
const MedicosController = require('../controllers/medicosController');
const MedicosCadastro = require('../controllers/medicosCadastro');
const MedicosEditar = require('../controllers/medicosEditar');
const MedicosDeletar = require('../controllers/medicosDeletar');
const MedicoConsultar = require('../controllers/medicoConsultar');
const BuscarController = require('../controllers/buscarController');
const {check, validationResult, body} = require('express-validator');

/* GET home page. */
router.get('/',MedicosController.index);

router.get('/medico/buscar', BuscarController.search)

router.get('/medico/cadastro', MedicosCadastro.create);
router.post('/medico/cadastro', [
    check("nome").isLength({max:120}).withMessage("O Campo Nome é Obrigatório, máximo 120caractéres"),
    check("crm").isLength({min:7}).withMessage("O Campo CRM é Obrigatório"),
    check("telefone").isLength({min:10}).withMessage("O Campo Telefone é Obrigatório"),
    check("celular").isLength({min:11}).withMessage("O Campo Celular é Obrigatório"),
    check("cep").isLength({min:8}).withMessage("O Campo CEP é Obrigatório"),
    check("rua").isLength({min:3}).withMessage("O Campo Rua é Obrigatório"),
    check("numero").isLength({min:1}).withMessage("O Campo Número é Obrigatório"),
    check("bairro").isLength({min:3}).withMessage("O Campo Bairro é Obrigatório"),
    check("cidade").isLength({min:3}).withMessage("O Campo Cidade é Obrigatório"),
    check("estado").isLength({max:2}).withMessage("O Campo Estado é Obrigatório"),
    check("especialidade1").isLength({min:1}).withMessage("É Obrigatório Selecionar Duas Especialidades"),
    check("especialidade2").isLength({min:1}).withMessage("É Obrigatório Selecionar Duas Especialidades")
], MedicosCadastro.store);

router.get('/medico/sucesso', MedicosController.sucesso);

router.get('/medico/consultar/:id', MedicoConsultar.index)

router.get('/medico/editar/:id', MedicosEditar.edit)
router.put('/medico/editar/:id', MedicosEditar.update)

router.delete('/medico/deletar/:id', MedicosDeletar.destroy);



module.exports = router;
