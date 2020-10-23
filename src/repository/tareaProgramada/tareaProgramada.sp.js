module.exports = {
    ListarTareasProgramadasEnMaquina: {
        nombre: 'SP_ObtenerTareasProgramadasMaquina',
        inputParams: [{ nombre: 'CodigoMaquina', match: 'codigoMaquina' }],
        outputParams: [],
        multiFila: true,
    },

    ProgramarTareaMaquina: {
        nombre: 'SP_ProgramarTareaPDA',
        inputParams: [
            { nombre: 'CodigoMaquina', match: 'codigoMaquina' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
        publicarMensaje: true,
        datosPublicacion: {
            topic: '/ordenesFabricacion/programacion',
        }
    },

    ConsumirEtiqueta: {
        nombre: 'SP_ConsumirEtiqueta',
        inputParams: [
            { nombre: 'CodigoMaquina', match: 'codigoMaquina' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'IdOperacionConsumir', match: 'idOperacionConsumir' },
            { nombre: 'IdOperario', match: 'idOperario'}
        ],
        outputParams: [],
        multiFila: true,
        publicarMensaje: true,
        datosPublicacion: {
            topic: '/ordenesFabricacion/consumos',
        }
    },

    DesconsumirEtiquetas: {
        nombre: 'SP_DesconsumirEtiquetas',
        inputParams: [
            { nombre: 'IdMaquina', match: 'idMaquina' },
            { nombre: 'CodigosEtiquetas', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },

    DesconsumirEtiqueta: {
        nombre: 'SP_DesconsumirEtiqueta',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'CodigoEtiqueta' },
            { nombre: 'IdOperacion', match: 'IdOperacion' }
        ],
        outputParams: [],
        multiFila: true,
    },
    ConsumirEnPuesto: {
        nombre: 'SP_ConsumirEnPuesto',
        inputParams: [
            { nombre: 'IdTarea', match: 'idTarea' },
            { nombre: 'Cantidad', match: 'cantidad' },
            { nombre: 'IdMaquina', match: 'idMaquina' }
        ],
        outputParams: [],
        multiFila: false,
    },
}