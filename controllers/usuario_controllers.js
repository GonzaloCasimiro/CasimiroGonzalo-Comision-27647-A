const usuario_model=require('./../models/usuario_models')
const usuario_controllers={};

//ver usuarios
usuario_controllers.ver_usuarios=async(req,res)=>{
    try{
        const lista_usuarios=await usuario_model.find();
        return res.json(lista_usuarios);
    }
    catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un error',
            error:error
        })    }
}
//crear usuario

//eliminar usuario


module.exports = usuario_controller;