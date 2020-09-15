
module.exports = {
    Crear: {
        nombre: 'SP_PuestoCrear',
        inputParams: [
            { nombre: 'Descripcion', match: 'descripcion' },
            { nombre: 'Observaciones', match: 'observaciones' },
        ],
        outputParams: [],
        multiFila: false,
    },
    BuscarPorDescripcion:{
        nombre: 'SP_PuestoBuscarPorDescripcion',
        inputParams: [
            { nombre: 'Descripcion', match: 'descripcion' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarPorCodigoEtiqueta:{
        nombre: 'SP_PuestoBuscarPorCodigoEtiqueta',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },
}