const SP = require('./barquilla.sp')
const GenericRepository = require('../generic.repository')()

function BarquillaRepository(dbContext) {

    async function buscarOperacionesEnSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacionesEnSeccion, req, res, next)
    }

    async function consumirBarquilla(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ConsumirBarquillaOperacion, req, res, next)
    }

    return {
        buscarOperacionesEnSeccion,
        consumirBarquilla,
    }
}

module.exports = BarquillaRepository;