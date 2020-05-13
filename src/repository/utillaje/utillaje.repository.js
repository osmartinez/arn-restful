
const SP = require('./utillaje.sp')
const GenericRepository = require('../generic.repository')()

function UtillajeRepository(dbContext) {

    async function localizarPorOrdenFabricacionSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorOrdenFabricacionSeccion, req,res,next)
    }

    async function localizarPorPrepaqueteSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorPrepaqueteFabricacionSeccion, req,res,next)
    }

    return {
        localizarPorOrdenFabricacionSeccion,
        localizarPorPrepaqueteSeccion,
    }
}

module.exports = UtillajeRepository;

