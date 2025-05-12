const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta para index1.html
router.get("/pagina1", (req, res) => {
    res.sendFile(path.join(__dirname, "/index1.html"));
});

// Ruta para index2.html
router.get("/pagina2", (req, res) => {
    res.sendFile(path.join(__dirname, "index2.html"));
});

// Ruta para index3.html
router.get("/pagina3", (req, res) => {
    res.sendFile(path.join(__dirname, "index3.html"));
});

// Ruta para index4.html
router.get("/pagina4", (req, res) => {
    res.sendFile(path.join(__dirname, "index4.html"));
});

module.exports = router;
