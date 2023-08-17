const express = require('express');
const app = express();

//definir middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//exportar rutas 
app.use(require('./rutas/index_rutas'));

app.listen(3000);  
console.log('Server on port 3000'); 

