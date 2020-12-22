const SP = require('./maquina.sp')
const GenericRepository = require('../generic.repository')()

function MaquinaRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req,res,next)
    }

    async function buscarTodas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodas, req,res,next)
    }

    async function buscarTodasEnSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodasEnSeccion, req,res,next)
    }

    async function asociarAPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.AsociarAPuesto, req,res,next)
    }

    async function desasociarPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.DesasociarPuesto, req,res,next)
    }

    async function actualizarConfiguracionPines(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarConfiguracionesPines, req,res,next)
    }

    async function actualizarPosicionUI(req, res, next) {
        console.log(req.body)
        GenericRepository.execute(dbContext, req.body, SP.ActualizarPosicionUI, req, res, next)
    }

    return {
        buscarPorCodigo,
        buscarTodas,
        buscarTodasEnSeccion,
        asociarAPuesto,
        actualizarConfiguracionPines,
        desasociarPuesto,
        actualizarPosicionUI,
    }
}

module.exports = MaquinaRepository;