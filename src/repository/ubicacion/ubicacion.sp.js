const sql = require('mssql')

module.exports = {
    Buscar: {
        nombre: 'SP_BuscarUbicacionPorCodigo',
        inputParams: [{ nombre: 'CodigoUbicacion',tipo: sql.NVarChar, match: 'codigoUbicacion' }],
        outputParams: [],
        multiFila: false,
    },
    UbicarAgrupacion: {
        nombre: 'SP_UbicarAgrupacion',
        inputParams: [
            { nombre: 'CodigoUbicacion',tipo: sql.NVarChar, match: 'codigoUbicacion' },
            { nombre: 'CodigoAgrupacion',tipo: sql.NVarChar, match: 'codigoAgrupacion' }
        ],
        outputParams: [],
        multiFila: true,
    },
    UbicarContenedor: {
        nombre: 'SP_UbicarContenedor',
        inputParams: [
            { nombre: 'CodigoUbicacion',tipo: sql.NVarChar, match: 'codigoUbicacion' },
            { nombre: 'CodigoEtiqueta',tipo: sql.NVarChar, match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: false,
    },

    AgruparContenedor: {
        nombre: 'SP_AgruparContenedor',
        inputParams: [
            { nombre: 'CodigoAgrupacion',tipo: sql.NVarChar, match: 'codigoAgrupacion' },
            { nombre: 'CodigoEtiqueta',tipo: sql.NVarChar, match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },


    UbicarPrepaquete: {
        nombre: 'SP_UbicarPrepaquete',
        inputParams: [
            { nombre: 'CodigoUbicacion',tipo: sql.NVarChar, match: 'codigoUbicacion' },
            { nombre: 'CodigoPrepaquete',tipo: sql.NVarChar, match: 'codigoPrepaquete' }
        ],
        outputParams: [],
        multiFila: false,
    },

    VaciarUbicacion: {
        nombre: 'SP_VaciarUbicacion',
        inputParams: [
            { nombre: 'CodigoUbicacion',tipo: sql.NVarChar, match: 'codigoUbicacion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    VaciarAgrupacion: {
        nombre: 'SP_VaciarAgrupacion',
        inputParams: [
            { nombre: 'CodigoAgrupacion',tipo: sql.NVarChar, match: 'codigoAgrupacion' },
        ],
        outputParams: [],
        multiFila: true,
    },


}