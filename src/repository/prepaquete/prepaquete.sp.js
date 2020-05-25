module.exports = {
    Buscar: {
        nombre: 'SP_BuscarPrepaquete',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'CodigoSeccion', match: 'codigoSeccion' }
        ],
        outputParams: [],
        multiFila: true,
    },
}