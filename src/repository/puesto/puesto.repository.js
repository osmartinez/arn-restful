
const SP = require('./puesto.sp')
const GenericRepository = require('../generic.repository')()

function PuestoRepository(dbContext) {

    async function crear(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.Crear, req,res,next)
    }

    async function buscarPorCodigoEtiqueta(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigoEtiqueta, req,res,next)
    }

    async function buscarPorDescripcion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorDescripcion, req,res,next)
    }

    async function actualizarIncidencia(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarIncidencia, req,res,next)
    }

    return {
        crear,
        buscarPorCodigoEtiqueta,
        buscarPorDescripcion,
        actualizarIncidencia,
        
    }
}

module.exports = PuestoRepository;

