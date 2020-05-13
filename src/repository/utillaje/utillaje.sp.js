const sql = require('mssql')
module.exports = {
    LocalizacionPorOrdenFabricacionSeccion: {
        nombre: 'SP_ObtenerUbicacionesUtillajeOrdenFabricacion',
        inputParams: [
            { nombre: 'IdOrden',tipo: sql.Int, match: 'idOrden' },
            { nombre: 'CodSeccion', tipo: sql.NVarChar, match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    LocalizacionPorPrepaqueteFabricacionSeccion: {
        nombre: 'SP_ObtenerUbicacionesUtillajePrepaquete',
        inputParams: [
            { nombre: 'CodigoPrepaquete', tipo: sql.NVarChar, match: 'codigoPrepaquete' },
            { nombre: 'CodSeccion', tipo: sql.NVarChar, match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: true,
    },

}