const express = require('express');
const path=require('path');

const router = express.Router();

//ruta principal
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));

});
//ruta de registros

router.get("/registro.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registro.html"));

});

router.get("/calculadora.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/calculadora.html"));

});

module.exports=router;


