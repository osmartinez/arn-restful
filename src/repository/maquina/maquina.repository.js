const SP = require('./maquina.sp')
const GenericRepository = require('../generic.repository')()

function MaquinaRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req, res, next)
    }

    async function buscarTodas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodas, req, res, next)
    }

    async function buscarTodasEnSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodasEnSeccion, req, res, next)
    }

    async function asociarAPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.AsociarAPuesto, req, res, next)
    }

    async function desasociarPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.DesasociarPuesto, req, res, next)
    }

    async function actualizarConfiguracionPines(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarConfiguracionesPines, req, res, next)
    }

    async function actualizarPosicionUI(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarPosicionUI, req, res, next)
    }

    async function asignarTareaEjecucion(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.AsignarTareaMaquina, req, res, next)
    }

    async function desasignarTareaEjecucion(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.DesasignarTareaMaquina, req, res, next)
    }

    async function programarTarea(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ProgramarTareaMaquina, req, res, next)
    }

    async function actualizarPosicionTarea(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarPosicionTareaMaquina, req, res, next)
    }

    async function obtenerTodosMoldes(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerTodosMoldes, req, res, next)
    }

    async function obtenerIOT(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerTodosIOT, req, res, next)
    }

    async function verColaTrabajoPorId(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.VerProgramacionMaquinaPorId, req, res, next)
    }

    async function verColaTrabajoPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.VerProgramacionMaquinaPorCodigo, req, res, next)
    }

    async function registrarHistoricoCiclo(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.RegistrarHistoricoCiclo, req, res, next)
    }

    async function registrarDato(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.RegistrarDato, req, res, next)
    }

    async function obtenerTareaEjecucionPorIdMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerTareaEjecucionPorIdMaquina, req, res, next)
    }

    async function obtenerTareaEjecucionPorIpAutomataPosicion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ObtenerTareaEjecucionPorIpAutomataPosicion, req, res, next)
    }
    return {
        buscarPorCodigo,
        buscarTodas,
        buscarTodasEnSeccion,
        asociarAPuesto,
        actualizarConfiguracionPines,
        desasociarPuesto,
        actualizarPosicionUI,
        asignarTareaEjecucion,
        obtenerTodosMoldes,
        programarTarea,
        verColaTrabajoPorCodigo,
        verColaTrabajoPorId,
        desasignarTareaEjecucion,
        registrarHistoricoCiclo,
        registrarDato,
        actualizarPosicionTarea,
        obtenerTareaEjecucionPorIdMaquina,
        obtenerTareaEjecucionPorIpAutomataPosicion,
        obtenerIOT,
    }
}

module.exports = MaquinaRepository;