
const SP = require('./utillaje.sp')
const GenericRepository = require('../generic.repository')()

function UtillajeRepository(dbContext) {

    async function localizarPorOrdenFabricacionSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorOrdenFabricacionSeccion, req,res,next)
    }

    async function localizarPorPrepaqueteSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorPrepaqueteFabricacionSeccion, req,res,next)
    }

    async function buscarImpresionMarcajePorUtillajeTalla(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarImpresionMarcajePorUtillajeTalla, req,res,next)
    }

    async function guardarImpresionMarcajePorUtillajeTalla(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.GuardarImpresionMarcajePorUtillajeTalla, req,res,next)
    }

    return {
        localizarPorOrdenFabricacionSeccion,
        localizarPorPrepaqueteSeccion,
        buscarImpresionMarcajePorUtillajeTalla,
        guardarImpresionMarcajePorUtillajeTalla,
    }
}

module.exports = UtillajeRepository;

