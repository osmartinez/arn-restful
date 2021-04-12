module.exports = {
    Buscar: {
        nombre: 'SP_BuscarOrdenFabricacionPorId',
        inputParams: [{ nombre: 'IdOrden', match: 'idOrden' }],
        outputParams: [],
        multiFila: false,
    },

    BuscarOperacion: {
        nombre: 'SP_BuscarOperacionPorOrdenFabricacionSeccion',
        inputParams: [
            { nombre: 'IdOrden', match: 'idOrden' },
            { nombre: 'CodSeccion', match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    BuscarOperaciones: {
        nombre: 'SP_BuscarOperacionesPorOrdenFabricacion',
        inputParams: [
            { nombre: 'IdOrden', match: 'idOrden' },
        ],
        outputParams: [],
        multiFila: true,
    },

    BuscarOperacionesTallas: {
        nombre: 'SP_BuscarOperacionesTallasPorOperacion',
        inputParams: [
            { nombre: 'IdOperacion', match: 'idOperacion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    BuscarPorCodigo: {
        nombre: 'SP_BuscarOrdenFabricacionPorCodigo',
        inputParams: [{ nombre: 'Codigo', match: 'codigo' }],
        outputParams: [],
        multiFila: false,
    },

    BuscarOperacionesPorPrepaqueteMaquina: {
        nombre: 'SP_BuscarOperacionesPorPrepaqueteMaquina',
        inputParams: [{ nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        { nombre: 'CodigoMaquina', match: 'codigoMaquina' }],
        outputParams: [],
        multiFila: true,
    },

    BuscarOperacionesEnSeccion: {
        nombre: 'SP_OrdenFabricacionObtenerOperacionesEnSeccion',
        inputParams: [{ nombre: 'Id', match: 'id' },
        { nombre: 'CodSeccion', match: 'codSeccion' }],
        outputParams: [],
        multiFila: true,
    },

    BuscarTallasArticulo: {
        nombre: 'SP_OrdenFabricacionObtenerTallasArticulo',
        inputParams: [{ nombre: 'Id', match: 'id' }],
        outputParams: [],
        multiFila: true,
    },

    ObtenerInformacionTareaPorOperacionYTalla: {
        nombre: 'SP_OrdenFabricacionObtenerInformacionTareaPorOperacionYTalla',
        inputParams: [
            { nombre: 'IdOperacion', match: 'idOperacion' },
            { nombre: 'Talla', match: 'talla' },],
        outputParams: [],
        multiFila: true,
    },


    ObtenerUbicacionesTareaPorBarquilla:{
        nombre: 'SP_OrdenFabricacionBuscarUbicacionesTareasPorBarquilla',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerOperacionesPorBarquilla:{
        nombre: 'SP_OrdenFabricacionObtenerOperacionesPorBarquilla',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    }
}