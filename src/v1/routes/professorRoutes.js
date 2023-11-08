const express = require('express');
const router = express.Router();
const professorController = require('./professorController');
const requireAuthentication = require('./requireAuthentication'); // Importa middleware de autenticación

router.get('/', professorController.getAllProfessors);
router.get('/:id', professorController.getProfessorById);

//el middleware de autenticación solo a estas rutas
router.use(requireAuthentication);

router.post('/', professorController.createProfessor);
router.patch('/:id', professorController.updateProfessor);
router.delete('/:id', professorController.deleteProfessor);

module.exports = router;
