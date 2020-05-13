
module.exports = {
    LocalizacionPorOrdenFabricacionSeccion: {
        nombre: 'SP_ObtenerUbicacionesUtillajeOrdenFabricacion',
        inputParams: [
            { nombre: 'IdOrden', match: 'idOrden' },
            { nombre: 'CodSeccion', match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    LocalizacionPorPrepaqueteFabricacionSeccion: {
        nombre: 'SP_ObtenerUbicacionesUtillajePrepaquete',
        inputParams: [
            { nombre: 'CodigoPrepaquete', match: 'codigoPrepaquete' },
            { nombre: 'CodSeccion', match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: true,
    },

}