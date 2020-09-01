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

    BuscarPorCodigo:{
        nombre: 'SP_BuscarOrdenFabricacionPorCodigo',
        inputParams: [{nombre: 'Codigo', match:'codigo'}],
        outputParams:[],
        multiFila: false,
    }

   
}