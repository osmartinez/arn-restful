module.exports = {
    Buscar: {
        nombre: 'SP_BuscarUbicacionPorCodigo',
        inputParams: [{ nombre: 'CodigoUbicacion', match: 'codigoUbicacion' }],
        outputParams: [],
        multiFila: false,
    },
    UbicarAgrupacion: {
        nombre: 'SP_UbicarAgrupacion',
        inputParams: [
            { nombre: 'CodigoUbicacion', match: 'codigoUbicacion' },
            { nombre: 'CodigoAgrupacion', match: 'codigoAgrupacion' }
        ],
        outputParams: [],
        multiFila: true,
    },
    UbicarContenedor: {
        nombre: 'SP_UbicarContenedor',
        inputParams: [
            { nombre: 'CodigoUbicacion', match: 'codigoUbicacion' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: false,
    },

    AgruparContenedor: {
        nombre: 'SP_AgruparContenedor',
        inputParams: [
            { nombre: 'CodigoAgrupacion', match: 'codigoAgrupacion' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },


    UbicarPrepaquete: {
        nombre: 'SP_UbicarPrepaquete',
        inputParams: [
            { nombre: 'CodigoUbicacion', match: 'codigoUbicacion' },
            { nombre: 'CodigoPrepaquete', match: 'codigoPrepaquete' }
        ],
        outputParams: [],
        multiFila: false,
    },

    VaciarUbicacion: {
        nombre: 'SP_VaciarUbicacion',
        inputParams: [
            { nombre: 'CodigoUbicacion', match: 'codigoUbicacion' },
        ],
        outputParams: [],
        multiFila: true,
    },

    VaciarAgrupacion: {
        nombre: 'SP_VaciarAgrupacion',
        inputParams: [
            { nombre: 'CodigoAgrupacion', match: 'codigoAgrupacion' },
        ],
        outputParams: [],
        multiFila: true,
    },





}