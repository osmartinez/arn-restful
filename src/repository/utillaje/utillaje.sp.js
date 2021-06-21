
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
    LocalizacionPorOrdenFabricacionOperacionSeccion: {
        nombre: 'SP_ObtenerUbicacionesUtillajeOrdenFabricacionOperacion',
        inputParams: [
            { nombre: 'IdOperacion', match: 'idOperacion' },
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
    LocalizacionPorBarquillaFabricacionSeccion: {
        nombre: 'SP_ObtenerUbicacionesUtillajeBarquilla',
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
            { nombre: 'FicheroMarcaje', match: 'ficheroMarcaje' },

        ],
        outputParams: [],
        multiFila: false,
    },
    UbicarPorCodigoEtiqueta:{
        nombre: 'SP_UtillajeTallaColeccionUbicar',
        inputParams: [
            { nombre: 'CodUbicacion', match: 'CodUbicacion' },
            { nombre: 'CodigoEtiqueta', match: 'CodigoEtiqueta' },
        ],
        outputParams:[],
        multiFila: false,
    },
    BuscarUbicacionUtillajesPorBarquilla:{
        nombre: 'SP_UtillajeTallaColeccionBuscarPorBarquilla',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams:[],
        multiFila: true,
    },
    BuscarUbicacionUtillajesPorOperacion:{
        nombre: 'SP_UtillajeTallaColeccionBuscarPorIdOperacion',
        inputParams: [
            { nombre: 'IdOperacion', match: 'idOperacion' },
        ],
        outputParams:[],
        multiFila: true,
    },
    BuscarUbicacionUtillajesPorCodUtillaje:{
        nombre: 'SP_UtillajeTallaColeccionBuscarPorIdOperacion',
        inputParams: [
            { nombre: 'CodUtillaje', match: 'codUtillaje' },
        ],
        outputParams:[],
        multiFila: true,
    },
   
    UtillajeTallaColeccionDarAlta:{
        nombre: 'SP_UtillajeTallaColeccionDarAlta',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'Talla', match: 'talla' },
            { nombre: 'CodUtillaje', match: 'codUtillaje' },
            { nombre: 'IdContenedor', match: 'idContenedor' },

        ],
        outputParams:[],
        multiFila: false,
    },

    UtillajeTallaColeccionBuscarPorCodigoEtiqueta:{
        nombre: 'SP_UtillajeTallaColeccionBuscarPorCodigoEtiqueta',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams:[],
        multiFila: false,
    },


}