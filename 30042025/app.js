//Importar express
const exprees=require('express');

//creacion de una instancia
const app = exprees();

//definir el puerto
const port = 5009;

//Configuración de ruta por el método get para la raíz ('/')
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
    console.log(`Servidor escuchando en http://localhost:${port}`);

}); 

app.listen(port);


//6