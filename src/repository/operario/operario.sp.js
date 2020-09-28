module.exports = {
    BuscarPorId: {
        nombre: 'SP_OperarioBuscarPorId',
        inputParams: [{ nombre: 'IdOperario', match: 'idOperario' }],
        outputParams: [],
        multiFila: false,
    },

    BuscarPorCodigo: {
        nombre: 'SP_OperarioBuscarPorCodigo',
        inputParams: [{ nombre: 'CodigoOperario', match: 'codigoOperario' }],
        outputParams: [],
        multiFila: false,
    },
}