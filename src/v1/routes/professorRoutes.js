const express = require('express');
const professorController = require('../../controllers/professorController');

const router = express.Router();

router
    .get('/', professorController.getAllProfessors)
    .get('/:id', professorController.getProfessorById)
    .post('/', professorController.createProfessor)
    .patch('/:id', professorController.updateProfessor)
    .delete('/:id', professorController.deleteProfessor);

module.exports = router;
