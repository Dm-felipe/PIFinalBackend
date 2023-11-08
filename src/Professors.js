const db = require("./sqliteDB");

const getAllProfessors = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM professors", (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

const getProfessorById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM professors WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

const createProfessor = (professorData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO professors (name, subject) VALUES (?, ?)';
        const { name, subject } = professorData;

        db.run(query, [name, subject], function (err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, name, subject });
            }
        });
    });
};

const updateProfessor = (id, professorData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE professors SET name = ?, subject = ? WHERE id = ?';
        const { name, subject } = professorData;

        db.run(query, [name, subject, id], function (err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('No se encontró ningún profesor para actualizar'));
            } else {
                resolve({ id, name, subject });
            }
        });
    });
};

const deleteProfessor = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM professors WHERE id = ?';

        db.run(query, [id], function (err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('No se encontró ningún profesor para eliminar'));
            } else {
                resolve({ message: 'Profesor eliminado con éxito' });
            }
        });
    });
};

module.exports = {
    getAllProfessors,
    getProfessorById,
    createProfessor,
    updateProfessor,
    deleteProfessor
};