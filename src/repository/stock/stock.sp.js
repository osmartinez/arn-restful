
module.exports = {
    ActualizarStockArticuloTalla: {
        nombre: 'SP_ActualizarStockArticuloTalla',
        inputParams: [
            { nombre: 'Id', match: 'Id' },
            { nombre: 'Cantidad', match: 'Cantidad' },
        ],
        outputParams: [],
        multiFila: false,
    },
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
        nombre: 'SP_BuscarStockPorPrepaquete',
        inputParams: [
            { nombre: 'CodigoPrepaquete', match: 'codigoPrepaquete' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarStockPorIdOrden: {
        nombre: 'SP_BuscarStockPorOrdenFabricacion',
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

    BuscarStockArticuloEnUbicacion: {
        nombre: 'SP_BuscarStockArticuloEnUbicacion',
        inputParams: [
            { nombre: 'CodigoArticulo', match: 'codigoArticulo' },
            { nombre: 'CodUbicacion', match: 'codUbicacion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    BorrarStock: {
        nombre: 'SP_BorrarStock',
        inputParams: [
            { nombre: 'IdStock', match: 'idStock' },
        ],
        outputParams: [],
        multiFila: false,
    },

    BuscarCodigoArticuloPorIdOrden: {
        nombre: 'SP_BuscarCodigoArticuloPorIdOrden',
        inputParams: [
            { nombre: 'IdOrden', match: 'idOrden' },
        ],
        outputParams: [],
        multiFila: false,
    },

    CrearStock:{
        nombre: 'SP_CrearStock',
        inputParams: [
            { nombre: 'CodigoArticulo', match: 'codigoArticulo' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'CodigoUbicacion', match: 'codigoUbicacion' },
            { nombre: 'IdTipoStock', match: 'idTipoStock' },
        ],
        outputParams: [],
        multiFila: true,
    }

}