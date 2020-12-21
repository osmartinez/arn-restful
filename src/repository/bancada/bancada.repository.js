const SP = require('./bancada.sp')
const GenericRepository = require('../generic.repository')()

function BancadaRepository(dbContext) {

    async function buscarPorId(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarPorId, req, res, next)
    }

    async function buscarMaquinas(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarMoldesBancada, req, res, next)
    }


    return {
        buscarPorId,
        buscarMaquinas,
            
    }
}

module.exports = BancadaRepository;