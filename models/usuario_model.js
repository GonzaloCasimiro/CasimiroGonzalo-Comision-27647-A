const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: String,
    contrasenia: String,
    nombres: String,
    apellidos: String,
});

const usuario_model = model('usuario', UsuarioSchema);

module.exports = usuario_model;