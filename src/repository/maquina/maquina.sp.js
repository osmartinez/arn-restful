module.exports = {
    BuscarPorCodigo: {
        nombre: 'SP_BuscarMaquinaPorCodigo',
        inputParams: [{ nombre: 'CodigoMaquina', match: 'codigoMaquina' }],
        outputParams: [],
        multiFila: false,
    },

    BuscarTodas: {
        nombre: 'SP_BuscarTodasMaquinas',
        inputParams: [],
        outputParams: [],
        multiFila: true,
    },

    BuscarTodasEnSeccion: {
        nombre: 'SP_BuscarTodasMaquinasEnSeccion',
        inputParams: [{ nombre: 'CodSeccion', match: 'codSeccion' }],
        outputParams: [],
        multiFila: true,
    },

    AsociarAPuesto: {
        nombre: 'SP_MaquinaAsociarAPuesto',
        inputParams: [{ nombre: 'IdMaquina', match: 'idMaquina' },
        { nombre: 'IdPuesto', match: 'idPuesto' }],
        outputParams: [],
        multiFila: true,
    },

    DesasociarPuesto: {
        nombre: 'SP_MaquinaDesasociarPuesto',
        inputParams: [
            { nombre: 'IdPuesto', match: 'idPuesto' }],
        outputParams: [],
        multiFila: true,
    },


    ActualizarConfiguracionesPines: {
        nombre: 'SP_MaquinaActualizarConfiguracionPines',
        inputParams: [
            { nombre: 'IdMaquina', match: 'idMaquina' },
            { nombre: 'EsPulsoManual', match: 'esPulsoManual' },
            { nombre: 'ProductoPorPulso', match: 'productoPorPulso' },
            { nombre: 'PinPulso', match: 'pinPulso' },
            { nombre: 'DescontarAuto', match: 'descontarAuto' },
            { nombre: 'PinPulso2', match: 'pinPulso2' },
            { nombre: 'ValorPulsoDependiente', match: 'valorPulsoDependiente' },
            { nombre: 'ValorBouncingPulso', match: 'valorBouncingPulso' },
            { nombre: 'DisparoPulso', match: 'disparoPulso' },

        ],
        outputParams: [],
        multiFila: false,
    },
    ActualizarPosicionUI: {
        nombre: 'SP_MoldesActualizarPosicionUI',
        inputParams: [
            { nombre: 'IdMaquina', match: 'idMaquina' },
            { nombre: 'UILeft', match: 'uiLeft' },
            { nombre: 'UITop', match: 'uiTop' }
        ],
        outputParams: [],
        multiFila: false,
    },
    AsignarTareaMaquina : {
        nombre: 'SP_MaquinaAsignarTarea',
        inputParams: [
            { nombre: 'IdsTareas', match: 'idsTareas' },
            { nombre: 'IdMaquina', match: 'idMaquina' },
            {nombre: 'Agrupacion', match: 'agrupacion'},
            {nombre: 'IdOperarioEjecucion', match: 'idOperarioEjecucion'},

        ],
        outputParams: [],
        multiFila: true,
    },
    DesasignarTareaMaquina : {
        nombre: 'SP_MaquinaDesasignarTarea',
        inputParams: [
            { nombre: 'IdsTareas', match: 'idsTareas' },
            { nombre: 'IdMaquina', match: 'idMaquina' },
        ],
        outputParams: [],
        multiFila: true,
    },
    ProgramarTareaMaquina : {
        nombre: 'SP_MaquinaProgramarTarea',
        inputParams: [
            { nombre: 'IdsTareas', match: 'idsTareas' },
            { nombre: 'IdMaquina', match: 'idMaquina' },
            {nombre: 'Agrupacion', match: 'agrupacion'},
            {nombre: 'IdOperarioPrograma', match: 'idOperarioPrograma'},

        ],
        outputParams: [],
        multiFila: true,
    },
    VerProgramacionMaquinaPorId : {
        nombre: 'SP_MaquinaVerColaTrabajoPorId',
        inputParams: [
            { nombre: 'IdMaquina', match: 'idMaquina' },
        ],
        outputParams: [],
        multiFila: true,
    },
    VerProgramacionMaquinaPorCodigo : {
        nombre: 'SP_MaquinaVerColaTrabajoPorCodigo',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },
    ObtenerTodosMoldes : {
        nombre: 'SP_MaquinasObtenerMoldes',
        inputParams: [
            
        ],
        outputParams: [],
        multiFila: true,
    }
}