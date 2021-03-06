
const SP = require('./utillaje.sp')
const GenericRepository = require('../generic.repository')()

function UtillajeRepository(dbContext) {

    async function localizarPorOrdenFabricacionSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorOrdenFabricacionSeccion, req,res,next)
    }

    async function localizarPorOrdenFabricacionOperacionSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorOrdenFabricacionOperacionSeccion, req,res,next)
    }

    async function localizarPorPrepaqueteSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorPrepaqueteFabricacionSeccion, req,res,next)
    }

    async function localizarPorBarquillaSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.LocalizacionPorBarquillaFabricacionSeccion, req,res,next)
    }


    async function buscarImpresionMarcajePorUtillajeTalla(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarImpresionMarcajePorUtillajeTalla, req,res,next)
    }

    async function guardarImpresionMarcajePorUtillajeTalla(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.GuardarImpresionMarcajePorUtillajeTalla, req,res,next)
    }

    async function buscarPorBarquilla(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarUbicacionUtillajesPorBarquilla, req,res,next)
    }

    async function buscarPorOperacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarUbicacionUtillajesPorOperacion, req,res,next)
    }

    async function buscarPorCodigoUtillaje(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarUbicacionUtillajesPorCodUtillaje, req,res,next)
    }

    async function ubicarPorEtiqueta(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.UbicarPorCodigoEtiqueta, req,res,next)
    }

    async function ejemplarDarAlta(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.UtillajeTallaColeccionDarAlta, req,res,next)
    }


    async function ejemplarBuscarPorCodigoEtiqueta(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.UtillajeTallaColeccionBuscarPorCodigoEtiqueta, req,res,next)
    }



    return {
        localizarPorOrdenFabricacionSeccion,
        localizarPorOrdenFabricacionOperacionSeccion,
        localizarPorPrepaqueteSeccion,
        buscarImpresionMarcajePorUtillajeTalla,
        guardarImpresionMarcajePorUtillajeTalla,
        localizarPorBarquillaSeccion,
        buscarPorBarquilla,
        buscarPorOperacion,
        buscarPorCodigoUtillaje,
        ubicarPorEtiqueta,
        ejemplarDarAlta,
        ejemplarBuscarPorCodigoEtiqueta,
        
    }
}

module.exports = UtillajeRepository;

