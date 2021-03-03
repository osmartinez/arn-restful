const SP = require('./bancada.sp')
const GenericRepository = require('../generic.repository')()

function BancadaRepository(dbContext) {

    async function buscarPorId(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarPorId, req, res, next)
    }

    async function buscarMaquinas(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarMoldesBancada, req, res, next)
    }

    async function crear(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.Crear, req,res,next)
    }

    async function actualizar(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.Actualizar, req,res,next)
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

    async function entradaOperarioPorCodigoObrero(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.EntradaOperarioPorCodigoObrero, req,res,next)
    }

    async function salidaOperarioPorCodigoObrero(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.SalidaOperarioPorCodigoObrero, req,res,next)
    }

    async function buscarOperariosActuales(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperariosActuales, req,res,next)
    }

    return {
        buscarPorId,
        buscarMaquinas,
        crear,
        actualizar,
        buscarPorCodigoEtiqueta,
        buscarPorDescripcion,
        actualizarIncidencia,
        obtenerTodos,
        obtenerPorId,
        obtenerConfiguracionesIncidencias,
        obtenerConfiguracionesPins,
        obtenerMaquinas,
        entradaOperarioPorCodigoObrero,
        salidaOperarioPorCodigoObrero,
        buscarOperariosActuales,
    }
}

module.exports = BancadaRepository;