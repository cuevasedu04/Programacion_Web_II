const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configuración de middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

// Configuración de plantillas
app.set('view engine', 'ejs');

// Rutas
app.use('/', userRoutes);

// Inicio del servidor
const port = 3008;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});

/* 
Que la aplicacion tenga rutas: 
 1.- Base de datos 
 2.- Logica de negocios: listar, actualizar, borrar
 3.- Carpeta oublica de los estilos: css, imagenes, etc
 4.- app.js
Generar la estructura de rutas  
*/

/* 
Punto extra: implementar en un docker esta aplicacion y hacer 
un video de como esta dentro de un contenedor
 */