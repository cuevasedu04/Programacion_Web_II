const db = require('../config/database');

const userController = {
    // Mostrar lista de usuarios
    getAllUsers: (req, res) => {
        const consultaDB = 'SELECT * FROM users';
        
        db.query(consultaDB, (err, results) => {
            if(err) {
                console.error('Error al recuperar usuarios', err);
                res.send('Error, no se pudieron recuperar los datos de la BD');
            } else {
                res.render('index', {users: results});
            }
        });
    },

    // Agregar nuevo usuario
    addUser: (req, res) => {
        const {name, email} = req.body;
        const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?,?)';
        
        db.query(insertarRegistro, [name, email], (err) => {
            if(err) {
                console.error('Error al agregar usuario', err);
                res.send('Error al agregar usuario');
            } else {
                res.redirect('/');
            }
        });
    },

    // Mostrar formulario de edición
    showEditForm: (req, res) => {
        const {id} = req.params;
        const buscarUsuarioID = 'SELECT * FROM users WHERE id = ?';
        
        db.query(buscarUsuarioID, [id], (err, results) => {
            if(err) {
                console.error("Error en la DB", err);
                res.send("Error al buscar usuario");
            } else {
                res.render('edit', {user: results[0]});
            }
        });
    },

    // Actualizar usuario
    updateUser: (req, res) => {
        const {id} = req.params;
        const {name, email} = req.body;
        const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        
        db.query(query, [name, email, id], (err) => {
            if(err) {
                console.error("Error al actualizar", err);
                res.send("Error al actualizar usuario");
            } else {
                res.redirect('/');
            }
        });
    },

    // Eliminar usuario
    deleteUser: (req, res) => {
        const {id} = req.params;
        const eliminarUsuarioID = 'DELETE FROM users WHERE id = ?';
        
        db.query(eliminarUsuarioID, [id], (err) => {
            if(err) {
                console.error("Error al eliminar en la DB", err);
                res.send("Error al eliminar usuario");
            } else {
                res.redirect('/');
            }
        });
    }
};

module.exports = userController;