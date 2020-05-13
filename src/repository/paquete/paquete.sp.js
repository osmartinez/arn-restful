const sql = require('mssql')
module.exports = {
    BuscarPorAgrupacion: {
        nombre: 'SP_BuscarPaquetesPorAgrupacion',
        inputParams: [{nombre: 'CodigoAgrupacion',tipo: sql.NVarChar, match: 'codigoAgrupacion'}],
        outputParams: [],
        multiFila : true,
    },
    BuscarPorUbicacion: {
        nombre: 'SP_BuscarPaquetesPorUbicacion',
        inputParams: [{nombre: 'CodigoUbicacion',tipo: sql.NVarChar, match: 'codigoUbicacion'}],
        outputParams: [],
        multiFila : true,
    },
    BuscarPorCodigoEtiqueta: {
        nombre: 'SP_BuscarPaquetePorCodigoEtiqueta',
        inputParams: [{nombre: 'CodigoEtiqueta',tipo: sql.NVarChar, match: 'codigoEtiqueta'}],
        outputParams: [],
        multiFila : false,
    }

}