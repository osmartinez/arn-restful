
const response = require('../../shared/response');
const SP = require('./packinglist.sp')
const GenericRepository = require('../generic.repository')()

function PackinglistRepository(dbContext) {

    async function crear(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.CrearPackinglist, req,res,next)
    }

    async function insertarContenedor(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.InsertarContenedorEnPackinglist, req,res,next)
    }

    return {
        crear,
        insertarContenedor,
    }
}

module.exports = PackinglistRepository;