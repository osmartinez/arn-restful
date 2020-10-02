module.exports = {
    BuscarEnSeccion: {
        nombre: 'SP_PrepaqueteBuscarEnSeccion',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'CodigoSeccion', match: 'codigoSeccion' }
        ],
        outputParams: [],
        multiFila: true,
    },

    BuscarPorCodigo: {
        nombre: 'SP_PrepaqueteBuscarPorCodigo',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },

    ActualizarCantidad: {
        nombre: 'SP_PrepaqueteActualizarCantidad',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'CodigoEtiqueta' },
            {nombre: 'Cantidad', match: 'Cantidad'}
        ],
        outputParams: [],
        multiFila: true,
    },
}