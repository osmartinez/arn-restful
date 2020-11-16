const mongoose = require('mongoose')
const DetalleTarea = require('./detalleTarea.model').schema

const maquinaSchema = new mongoose.Schema({
    idSql:{type: Number, required:true},
    nombre: {type:String, default: '<SIN NOMBRE>'},
    codSeccion: {type: Number, required:true},
    detallesTarea: {type: [DetalleTarea]},

})

module.exports = mongoose.model('Maquina', maquinaSchema)