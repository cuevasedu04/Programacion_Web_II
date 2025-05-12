const exprees = require('express');
const router = exprees.router();
const path = require('path');

//Definimos las rutas y los manejadores 

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));

});

module.exports = router
