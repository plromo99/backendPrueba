const {Router} = require ('express'); 
const router = Router();

const {getProductos, postProducto, buscarPorNombre, deleteProducto, actualizarProducto} = require ('../controladores/index_controller');

router.get('/productos',getProductos);
router.get('/productos/:nombre',buscarPorNombre);
router.post('/productos',postProducto);
router.delete('/productos/:id', deleteProducto); 
router.put('/productos/:id', actualizarProducto); 

module.exports = router; 