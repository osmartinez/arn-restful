module.exports = {
    BuscarPorCodigo: {
        nombre: 'SP_BarquillaBuscarPorCodigo',
        inputParams: [{ nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarOperacionesEnSeccion: {
        nombre: 'SP_BarquillaBuscarEnSeccion',
        inputParams: [{ nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        { nombre: 'CodigoSeccion', match: 'codigoSeccion' }],
        outputParams: [],
        multiFila: true,
    },
    BuscarInformacionEnSeccion: {
        nombre: 'SP_BarquillaBuscarInformacionEnSeccion',
        inputParams: [{ nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        { nombre: 'CodigoSeccion', match: 'codigoSeccion' }],
        outputParams: [],
        multiFila: true,
    },
    ConsumirBarquillaOperacion: {
        nombre: 'SP_BarquillaConsumirEnSeccion',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'IdOperacion', match: 'idOperacion' },
            { nombre: 'IdObrero', match: 'idObrero' },
            { nombre: 'IdMaquina', match: 'idMaquina' },
            { nombre: 'IdBarquillaContenido', match: 'idBarquillaContenido' },
            { nombre: 'Cantidad', match: 'cantidad' },
            { nombre: 'Talla', match: 'talla' },
        ],
        outputParams: [],
        multiFila: true,
    },
    ObtenerSiguienteOrdenAgrupacion: {
        nombre: 'SP_BarquillaObtenerSiguienteOrdenAgrupacion',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'IdOrdenAnterior', match: 'idOrdenAnterior' },
            { nombre: 'IdOperacionAnterior', match: 'idOperacionAnterior' },
        ],
        outputParams: [],
        multiFila: false,
    },
    
}