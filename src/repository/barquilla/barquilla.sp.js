module.exports = {
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
}