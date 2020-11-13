
const SP = require('./operario.sp')
const GenericRawRepository = require('../generic.raw.repository')()

function OperarioRawRepository(dbContext) {

    async function buscar(id) {
        return await GenericRawRepository.execute(dbContext, {id: id}, SP.BuscarPorId)
    }

    async function buscarPorCodigo(codigo) {
        return await GenericRawRepository.execute(dbContext, {codigoOperario: codigo}, SP.BuscarPorCodigo)
    }

    return {
        buscar,
        buscarPorCodigo
    }
}

module.exports = OperarioRawRepository;