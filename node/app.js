//importamos el modulo http que viene incluido en Node.js
const PaquetesServidorNodeImportado = require('http');
//crear un servidor 
const port = 3056;

const server = PaquetesServidorNodeImportado.createServer((req,res)=>{
    //estableces el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    //Enviamos la respuesta 
    res.end('Hola Mundo');

});

//escuchar el puerto

server.listen(port,()=>{
    console.log(`Servidor ejecutandose por medio de http://localHost:${port}`)
})


//Postman = instalar y crear una cuenta con nuestro correo institucional    
//Exprees framework construido con node 