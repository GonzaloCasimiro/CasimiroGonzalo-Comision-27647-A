const usuario_router=require('express').Router();

const {
    ver_usuarios,
    ver_usuario,
    crear_usuario,
    editar_usuario,
    eliminar_usuario,
}=require('./../controllers/usuario_controllers');

usuario_router.get('/usuarios',ver_usuarios);

usuario_router.get('/usuario',ver_usuario);

usuario_router.post('/usuarios',crear_usuario);

usuario_router.put('/usuarios',editar_usuario);

usuario_router.delete('/usuarios',eliminar_usuario);

module.exports=usuario_router;



