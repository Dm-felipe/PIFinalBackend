const professorService = require("../services/professorService");

const getAllProfessors = async (req, res) => {
    try {
        const allProfessors = await professorService.getAllProfessors();
        res.json(allProfessors);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener todos los profesores" });
    }
};

const getProfessorById = async (req, res) => {
    const professorId = req.params.id;

    try {
        const professor = await professorService.getProfessorById(professorId);
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).json({ error: "Profesor no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el profesor" });
    }
}

const createProfessor = async (req, res) => {
    if (!req.user.isAdmin) {
        return res.status(401).json({ error: "No tiene autorización para crear profesores" });
    }

    const professorData = req.body;

    try {
        const createdProfessor = await professorService.createProfessor(professorData);
        res.status(201).json(createdProfessor);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el profesor" });
    }
}

const updateProfessor = async (req, res) => {
    const professorId = req.params.id;
    const professorData = req.body;

    if (!req.user.isAdmin) {
        return res.status(401).json({ error: "No tiene autorización para actualizar profesores" });
    }

    try {
        const updatedProfessor = await professorService.updateProfessor(professorId, professorData);
        if (updatedProfessor) {
            res.json(updatedProfessor);
        } else {
            res.status(404).json({ error: "Profesor no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el profesor" });
    }
}

const deleteProfessor = async (req, res) => {
    const professorId = req.params.id;

    if (!req.user.isAdmin) {
        return res.status(401).json({ error: "No tiene autorización para eliminar profesores" });
    }

    try {
        const deletedProfessor = await professorService.deleteProfessor(professorId);
        if (deletedProfessor) {
            res.json({ message: "Profesor eliminado con éxito" });
        } else {
            res.status(404).json({ error: "Profesor no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el profesor" });
    }
}

module.exports = {
    getAllProfessors,
    getProfessorById,
    createProfessor,
    updateProfessor,
    deleteProfessor
};