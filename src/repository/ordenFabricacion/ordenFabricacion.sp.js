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

   
}