const SP = require('./talleres.sp')
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

    return {
        buscarTodos,
        enviarPrepaquete,
        recibirPrepaquete
        
    }
}

module.exports = TallerRepository;