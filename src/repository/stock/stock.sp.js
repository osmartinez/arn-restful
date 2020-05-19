
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
            { nombre: 'CodigoUbicacion', match: 'CodigoUbicacion' },
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