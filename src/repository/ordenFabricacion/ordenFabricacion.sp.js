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

    BuscarPorCodigo:{
        nombre: 'SP_BuscarOrdenFabricacionPorCodigo',
        inputParams: [{nombre: 'Codigo', match:'codigo'}],
        outputParams:[],
        multiFila: false,
    }

   
}