var express = require('express');
var router = express.Router();
const MedicosController = require('../controllers/medicosController');
const MedicosCadastro = require('../controllers/medicosCadastro');
const MedicosEditar = require('../controllers/medicosEditar');
const MedicosDeletar = require('../controllers/medicosDeletar');
const MedicoConsultar = require('../controllers/medicoConsultar')

/* GET home page. */
router.get('/',MedicosController.index);

router.get('/medico/cadastro', MedicosCadastro.create);
router.post('/medico/cadastro', MedicosCadastro.store);

router.get('/medico/consultar/:id', MedicoConsultar.index)

router.get('/medico/editar/:id', MedicosEditar.edit)
router.put('/medico/editar/:id', MedicosEditar.update)

router.delete('/medico/deletar/:id', MedicosDeletar.destroy);



module.exports = router;
