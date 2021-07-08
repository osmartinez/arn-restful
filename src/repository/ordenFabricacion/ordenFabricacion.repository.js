
const SP = require('./ordenFabricacion.sp')
const GenericRepository = require('../generic.repository')()

function OrdenFabricacionRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    async function buscarOperacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacion, req,res,next)
    }

    async function buscarOperaciones(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperaciones, req,res,next)
    }

    async function buscarOperacionesTallas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.buscarOperacionesTallas, req,res,next)
    }

    async function buscarOperacionesPorPrepaqueteMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacionesPorPrepaqueteMaquina, req,res,next)
    }

    async function buscarOperacionesEnSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacionesEnSeccion, req,res,next)
    }

    async function buscarTallasArticulo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTallasArticulo, req,res,next)
    }

    async function obtenerInformacionTareaPorOperacionYTalla(req,res,next){
        GenericRepository.execute(dbContext, req.params, SP.ObtenerInformacionTareaPorOperacionYTalla, req,res,next)
    }

    async function obtenerUbicacionesTareaPorBarquilla(req,res,next){
        GenericRepository.execute(dbContext, req.params, SP.ObtenerUbicacionesTareaPorBarquilla, req,res,next)
    }

    async function obtenerOperacionesPorBarquilla(req,res,next){
        GenericRepository.execute(dbContext, req.params, SP.ObtenerOperacionesPorBarquilla, req,res,next)
    }

    async function reservarStock(req,res,next){
        GenericRepository.execute(dbContext, req.params, SP.ReservarStock, req,res,next)
    }


    return {
        buscar,
        buscarOperacion,
        buscarOperaciones,
        buscarOperacionesTallas,
        buscarOperacionesPorPrepaqueteMaquina,
        buscarOperacionesEnSeccion,
        buscarTallasArticulo,
        obtenerInformacionTareaPorOperacionYTalla,
        obtenerUbicacionesTareaPorBarquilla,
        obtenerOperacionesPorBarquilla,
        reservarStock,
    }
}

module.exports = OrdenFabricacionRepository;