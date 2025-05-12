//Importar express
const exprees=require('express');
const path=require('path');

//creacion de una instancia
const app = exprees();

//definir el puerto
const port = 5623;


app.get('/', (req,res)=>{
    //res.send('Hola mundo');
    //res.sendFile("c:/Users/Cuevas/Desktop/6to Semestre/Programacion_Web_II/05052025/index.html")
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})

