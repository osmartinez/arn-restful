
const response = require('../../shared/response');
const SP = require('./operario.sp')
const GenericRepository = require('../generic.repository')()

function OperarioRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    async function entradaPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.EntradaPuesto, req,res,next)
    }

    async function salidaPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.SalidaPuesto, req,res,next)
    }

    return {
        buscar,
        entradaPuesto,
        salidaPuesto,

    }
}

module.exports = OperarioRepository;