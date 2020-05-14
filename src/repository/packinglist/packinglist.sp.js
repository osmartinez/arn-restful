module.exports = {
    CrearPackinglist: {
        nombre: 'SP_CrearPackinglist',
        inputParams: [{ nombre: 'Usuario', match: 'usuario' }],
        outputParams: [],
        multiFila: false,
    },

    InsertarContenedorEnPackinglist: {
        nombre: 'SP_InsertarContenedorPackinglist',
        inputParams: [
            { nombre: 'IdPackinglist', match: 'idPackinglist' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: false,
    }
}