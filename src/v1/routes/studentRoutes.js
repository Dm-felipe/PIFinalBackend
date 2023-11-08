const express = require('express');
const studentController = require('../../controllers/studentController');
const requireAuthentication = require('./requireAuthentication'); // Importa tu middleware de autenticación

const router = express.Router();

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);

// middleware de autenticación solo a estas rutas
router.use(requireAuthentication);

router.post('/', studentController.createStudent);
router.patch('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
