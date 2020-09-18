
const response = require('../../shared/response');
const SP = require('./operario.sp')
const GenericRepository = require('../generic.repository')()

function OperarioRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    return {
        buscar,
    }
}

module.exports = OperarioRepository;