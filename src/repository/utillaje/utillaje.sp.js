
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

    BuscarImpresionMarcajePorUtillajeTalla:{
        nombre: 'SP_BuscarImpresionMarcajePorUtillajeTalla',
        inputParams: [
            { nombre: 'CodigoUtillaje', match: 'codigoUtillaje' },
            { nombre: 'Talla', match: 'talla' },
        ],
        outputParams: [],
        multiFila: false,
    },
    GuardarImpresionMarcajePorUtillajeTalla:{
        nombre: 'SP_GuardarImpresionMarcajePorUtillajeTalla',
        inputParams: [
            { nombre: 'CodigoUtillaje', match: 'codigoUtillaje' },
            { nombre: 'Talla', match: 'talla' },
            { nombre: 'ImpresionMarcaje1', match: 'impresionMarcaje1' },
            { nombre: 'ImpresionMarcaje2', match: 'impresionMarcaje2' },
            { nombre: 'ImpresionMarcaje3', match: 'impresionMarcaje3' },
        ],
        outputParams: [],
        multiFila: false,
    }


}