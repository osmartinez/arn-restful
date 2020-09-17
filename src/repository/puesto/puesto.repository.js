
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

    async function obtenerTodos(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerTodos, req,res,next)
    }

    async function obtenerPorId(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerPorId, req,res,next)
    }

    async function obtenerConfiguracionesIncidencias(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerConfiguracionesIncidenciasPorId, req,res,next)
    }

    async function obtenerConfiguracionesPins(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerConfiguracionesPinsPorId, req,res,next)
    }

    async function obtenerMaquinas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerMaquinasPorId, req,res,next)
    }

    return {
        crear,
        buscarPorCodigoEtiqueta,
        buscarPorDescripcion,
        actualizarIncidencia,
        obtenerTodos,
        obtenerPorId,
        obtenerConfiguracionesIncidencias,
        obtenerConfiguracionesPins,
        obtenerMaquinas,
    }
}

module.exports = PuestoRepository;

