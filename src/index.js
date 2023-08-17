const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
//definir middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//exportar rutas 
app.use(require('./rutas/index_rutas'));


app.listen(3000);  
console.log('Server on port 3000'); 

