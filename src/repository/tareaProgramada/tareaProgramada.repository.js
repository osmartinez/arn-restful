const SP = require('./tareaProgramada.sp')
const GenericRepository = require('../generic.repository')()

function TareaProgramadaRepository(dbContext) {

    async function getTareasProgramadasEnMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.ListarTareasProgramadasEnMaquina, req,res,next)
    }

    async function programarTareaMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ProgramarTareaMaquina, req,res,next)
    }

    async function consumirTareaMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ConsumirEtiqueta, req,res,next)

    }

    async function desconsumirTareaMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.DesconsumirEtiqueta, req,res,next)
    }

    return {
        getTareasProgramadasEnMaquina,
        programarTareaMaquina,
        consumirTareaMaquina,
        desconsumirTareaMaquina,
    }
}

module.exports = TareaProgramadaRepository;