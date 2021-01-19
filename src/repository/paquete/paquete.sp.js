
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
    },

    GenerarConsumoInterno: {
        nombre: 'SP_PaqueteGenerarConsumoInterno',
        inputParams: [
            {nombre: 'IdPaquete', match: 'idPaquete'},
            {nombre: 'CantidadConsumir', match: 'cantidadConsumir'},
            {nombre: 'Observaciones', match: 'observaciones'},
            {nombre: 'IdOperacion', match: 'idOperacion'},
            {nombre: 'Usuario', match: 'usuario'}],
        outputParams: [],
        multiFila : false,
    }

}