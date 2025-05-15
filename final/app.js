const express = require ('express');
const mysql = require ('mysql2');
const bodyParser = require ('body-parser');

const app = express();

//manejo de peticion de http
app.use(bodyParser.urlencoded({extended:false}));

//configuracion de plantillas 
app.set('view engine' , 'ejs');

//conexion DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'patito23',
    database: 'node_crud',
    port: '3306'

});

db.connect(err =>{
    if(err){
        console.error("Error en la BD", err);
    }else{
        console.log("Conexion lista");
    }
});

//inicio del server

const port = 3008;
app.listen(port,() =>{
    console.log(`http://127.0.0.1:${port}`);

});

//mostrar lista de usuarios

app.get('/', (req,res) =>{
    
    const consultaDB = 'SELECT * FROM users';

    //trabajamos con la conexion 
    db.query(consultaDB, (err, results)=>{
        if(err){
            //no se econtro usuarui
             console.error('error al recuperar usuario',err);
             res.send('Error, no se recupera los datos de la BD');
        }else{
            res.render('index', {users: results});
        }

    });

});

//modulo para agrega el usurio 
app.post('/add', (req,res)=>{
    const {name, email} = req.body;

    const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?,?)';
    db.query(insertarRegistro, [name, email], (err) =>{
        if(err){
            console.error('Error al agregar', err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
        
    });

});

//modulo para editar usuario
app.get('/edit/:id',(req,res)=>{
    const{id}= req.params;
    const buscarUsuarioID = 'SELECT * FROM users WHERE id = ?';
    db.query(buscarUsuarioID,[id],(err,results)=>{
        if(err){
            console.log("Error en la DB", err);
        }else{
            res.render('edit',{user:results[0]});
        }
    });

})

app.post('/update/:id',(req,res)=>{
    const {id} = req.params;
    const {name,email}=req.body;

    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query,[name,email,id],(err)=>{
        if(err){
            console.error("Error", err);
        }else{
            res.redirect('/');
        }
    });
})