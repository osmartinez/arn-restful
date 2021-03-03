const SP = require('./taller.sp')
const GenericRepository = require('../generic.repository')()

function TallerRepository(dbContext) {

    async function buscarTodos(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodos, req,res,next)
    }

    async function enviarPrepaquete(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.EnviarPrepaquete, req,res,next)
    }

    async function recibirPrepaquete(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.RecibirPrepaquete, req,res,next)
    }

    async function enviarBarquilla(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.EnviarBarquilla, req,res,next)
    }

    async function recibirBarquilla(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.RecibirBarquilla, req,res,next)
    }

    return {
        buscarTodos,
        enviarPrepaquete,
        recibirPrepaquete,
        recibirBarquilla,
        enviarBarquilla,
        
    }
}

module.exports = TallerRepository;