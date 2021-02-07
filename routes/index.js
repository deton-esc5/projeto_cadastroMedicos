var express = require('express');
var router = express.Router();
const MedicosController = require('../controllers/medicosController');
const MedicosCadastro = require('../controllers/medicosCadastro');
const MedicosEditar = require('../controllers/medicosEditar');
const MedicosDeletar = require('../controllers/medicosDeletar');

/* GET home page. */
router.get('/',MedicosController.index);

router.get('/cadastro', MedicosCadastro.index, MedicosCadastro.create);
router.post('/cadastro', MedicosCadastro.store);

router.get('/editar/:id', MedicosEditar.edit)
router.put('/editar/:id', MedicosEditar.update)

router.delete('/deletar/:id', MedicosDeletar.destroy);



module.exports = router;
