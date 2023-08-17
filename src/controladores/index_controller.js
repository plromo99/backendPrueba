const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'pruebaiste',
    port: '5432'
});

const getProductos = async (req, res) => {
    const response = await pool.query('SELECT * FROM productos ');
    res.status(200).json(response.rows);
};

const buscarPorNombre =async (req, res) => {
    const nombre = req.params.nombre;
    const response = await pool.query('SELECT * FROM productos WHERE nombre=$1', [nombre]);
    //res.json(response.rows);
    res.status(200).json(response.rows);
};

const postProducto = async (req, res) => {
    const {nombre , descripcion, precio, cantidad_stock} = req.body;
    const response = await pool.query('INSERT INTO productos (nombre, descripcion, precio, cantidad_stock) VALUES ($1, $2, $3 , $4)', 
    [nombre,descripcion,precio,cantidad_stock]);  
    console.log(response);
    //res.json('ingreso correctamente');
    //res.send('producto ingresado');     
    res.status(201).json({ message: 'Product added successfully' });
};

const deleteProducto = async (req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM productos WHERE id = $1', [id]);
    res.json(`Producto ${id} eliminado correctamente`);
};

const actualizarProducto = async (req, res) => {
    const id = req.params.id;
    const {nombre , descripcion, precio, cantidad_stock} = req.body;
    const response = await pool.query('UPDATE productos SET nombre = $1, descripcion=$2, precio=$3, cantidad_stock=$4 WHERE id=$5' , 
    [nombre,descripcion,precio,cantidad_stock, id]);
    console.log(response);
    res.json('Producto actualizado correctamente');
};


module.exports={
    getProductos,
    postProducto,
    buscarPorNombre,
    deleteProducto,
    actualizarProducto
}