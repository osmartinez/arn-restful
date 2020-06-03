
module.exports = {
    BuscarStockPorContenedor: {
        nombre: 'SP_BuscarStockPorContenedor',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarStockPorUbicacion: {
        nombre: 'SP_BuscarStockPorUbicacion',
        inputParams: [
            { nombre: 'CodigoUbicacion', match: 'codigoUbicacion' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarStockPorPrepaquete: {
        nombre: 'BuscarStockPorPrepaquete',
        inputParams: [
            { nombre: 'CodigoPrepaquete', match: 'codigoPrepaquete' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarStockPorIdOrden: {
        nombre: 'BuscarStockPorIdOrden',
        inputParams: [
            { nombre: 'IdOrden', match: 'idOrden' },
        ],
        outputParams: [],
        multiFila: true,
    },

    BuscarStockTallasPorStock: {
        nombre: 'SP_BuscarStockTallasPorStock',
        inputParams: [
            { nombre: 'IdStock', match: 'idStock' },
        ],
        outputParams: [],
        multiFila: true,
    },



}