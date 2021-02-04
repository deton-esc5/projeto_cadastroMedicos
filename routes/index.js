var express = require('express');
var router = express.Router();
const MedicosController = require('../controllers/medicosController');
const MedicosCadastro = require('../controllers/medicosCadastro');

/* GET home page. */
router.get('/',MedicosController.index);


module.exports = router;
