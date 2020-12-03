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
    },

    ConsumirEtiqueta: {
        nombre: 'SP_ConsumirEtiqueta',
        inputParams: [
            { nombre: 'CodigoMaquina', match: 'codigoMaquina' },
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'IdOperacionConsumir', match: 'idOperacionConsumir' },
            { nombre: 'IdOperario', match: 'idOperario' }
        ],
        outputParams: [],
        multiFila: true,
    },

    ConsumirPLC: {
        nombre: 'SP_ConsumirPLC',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
            { nombre: 'IdTarea', match: 'idTarea' },
            { nombre: 'Pares', match: 'pares' },
            { nombre: 'IpAutomata', match: 'ipAutomata' },
            { nombre: 'Posicion', match: 'posicion' },
            { nombre: 'IdOperacionConsumir', match: 'idOperacionConsumir' },
            { nombre: 'CodigoOrden', match: 'codigoOrden' },
            { nombre: 'IdOrden', match: 'idOrden' },

        ],
        outputParams: [],
        multiFila: true,
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