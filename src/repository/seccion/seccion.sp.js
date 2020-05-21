module.exports = {
    BuscarPorCodigo: {
        nombre: 'SP_BuscarSeccionPorCodigo',
        inputParams: [{ nombre: 'CodigoSeccion', match: 'codigoSeccion' }],
        outputParams: [],
        multiFila: false,
    },

    BuscarTodas: {
        nombre: 'SP_BuscarTodasSecciones',
        inputParams: [],
        outputParams: [],
        multiFila: true,
    },

}