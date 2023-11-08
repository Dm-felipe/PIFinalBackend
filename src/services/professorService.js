const Professor = require('../database/Professor');

const getAllProfessors = () => {
    return Professor.getAllProfessors();
};

const getProfessorById = (id) => {
    return Professor.getProfessorById(id);
};

const createProfessor = (professorData) => {
    return Professor.createProfessor(professorData);
};

const updateProfessor = (id, professorData) => {
    return Professor.updateProfessor(id, professorData);
};

const deleteProfessor = (id) => {
    return Professor.deleteProfessor(id);
};

module.exports = {
    getAllProfessors,
    getProfessorById,
    createProfessor,
    updateProfessor,
    deleteProfessor
}
