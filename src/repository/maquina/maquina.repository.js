const SP = require('./maquina.sp')
const GenericRepository = require('../generic.repository')()

function MaquinaRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req,res,next)
    }

    return {
        buscarPorCodigo,
    }
}

module.exports = MaquinaRepository;