const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'patito23',
    database: 'node_crud',
    port: '3306'
});

db.connect(err => {
    if(err) {
        console.error("Error en la BD", err);
    } else {
        console.log("Conexión a la base de datos establecida");
    }
});

module.exports = db;