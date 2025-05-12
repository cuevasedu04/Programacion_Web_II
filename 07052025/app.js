const express = require('express');
const path = require('path');

routes = require("./routes/routes");

const app = express();
const port = 3089;

//Middleware para servir los archivos estaticos (css, img, pdf, etc...)

app.use(express.static(path.join(__dirname,"public")));

app.use("/",routes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});

