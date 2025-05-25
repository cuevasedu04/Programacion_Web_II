const express = require('express');
const router = express.Router();
const userController = require('../logicaNegocio/userController');

// Ruta principal - mostrar todos los usuarios
router.get('/', userController.getAllUsers);

// Ruta para agregar usuario
router.post('/add', userController.addUser);

// Ruta para mostrar formulario de edición
router.get('/edit/:id', userController.showEditForm);

// Ruta para actualizar usuario
router.post('/update/:id', userController.updateUser);

// Ruta para eliminar usuario
router.get('/delete/:id', userController.deleteUser);

module.exports = router;