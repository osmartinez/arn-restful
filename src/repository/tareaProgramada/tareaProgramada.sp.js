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
        multiFila: false,
    },

    ConsumirEtiqueta: {
        nombre: 'SP_ConsumirEtiqueta',
        inputParams: [
            { nombre: 'CodigoMaquina', match: 'codigoMaquina' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },

    DesconsumirEtiqueta: {
        nombre: 'SP_DesconsumirEtiquetas',
        inputParams: [
            { nombre: 'IdMaquina', match: 'idMaquina' },
            { nombre: 'CodigosEtiquetas', match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },
}