// Importar express
const express = require('express');

// Crear instancias de express para los servidores
const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();

// Definir puertos únicos
const port1 = 5009;
const port2 = 5010;
const port3 = 5011;
const port4 = 5012;  // Cambié el puerto de app4 a 5012

// Configuración de ruta por el método get para la raíz ('/')
app1.get('/', (req, res) => {
    res.send('Hola Mundo servidor 1');
    console.log(`Servidor 1 escuchando en http://localhost:${port1}`);
});

// Servidor 1
app1.listen(port1);

// Servidor 2
app2.get('/', (req, res) => {
    res.send('Hola mundo desde servidor 2');
    console.log(`Servidor 2 escuchando en http://localhost:${port2}`);
});
app2.listen(port2);

// Servidor 3
app3.get('/', (req, res) => {
    res.send('Hola mundo desde servidor 3');
    console.log(`Servidor 3 escuchando en http://localhost:${port3}`);
});
app3.listen(port3);

// Servidor 4
app4.get('/', (req, res) => {
    res.send('Hola mundo desde servidor 4');
    console.log(`Servidor 4 escuchando en http://localhost:${port4}`);
});
app4.listen(port4);

