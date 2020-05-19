module.exports = {
    BuscarPorCodigo: {
        nombre: 'SP_BuscarMaquinaPorCodigo',
        inputParams: [{ nombre: 'CodigoMaquina', match: 'codigoMaquina' }],
        outputParams: [],
        multiFila: false,
    },

    BuscarTodas: {
        nombre: 'SP_BuscarTodasMaquinas',
        inputParams: [],
        outputParams: [],
        multiFila: true,
    },
}