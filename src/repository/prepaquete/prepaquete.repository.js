const SP = require('./prepaquete.sp')
const GenericRepository = require('../generic.repository')()

function PrepaqueteRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    return {
        buscar,

    }
}

module.exports = PrepaqueteRepository;