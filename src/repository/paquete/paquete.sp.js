
module.exports = {
    BuscarPorAgrupacion: {
        nombre: 'SP_BuscarPaquetesPorAgrupacion',
        inputParams: [{nombre: 'CodigoAgrupacion', match: 'codigoAgrupacion'}],
        outputParams: [],
        multiFila : true,
    },
    BuscarPorUbicacion: {
        nombre: 'SP_BuscarPaquetesPorUbicacion',
        inputParams: [{nombre: 'CodigoUbicacion', match: 'codigoUbicacion'}],
        outputParams: [],
        multiFila : true,
    },
    BuscarPorCodigoEtiqueta: {
        nombre: 'SP_BuscarPaquetePorCodigoEtiqueta',
        inputParams: [{nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta'}],
        outputParams: [],
        multiFila : false,
    }

}