//Importar express
const exprees=require('express');

//creacion de una instancia
const app = exprees();

//definir el puerto
const port = 5623;


app.get('/', (req,res)=>{
    res.send('Hola mundo sin path');
    res.sendFile("/index.html");

});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})

