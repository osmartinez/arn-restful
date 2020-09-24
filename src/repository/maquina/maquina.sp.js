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
        inputParams: [{nombre: 'CodSeccion', match: 'codSeccion'}],
        outputParams: [],
        multiFila: true,
    },

    AsociarAPuesto: {
        nombre: 'SP_MaquinaAsociarAPuesto',
        inputParams: [{nombre: 'IdMaquina', match: 'idMaquina'},
        {nombre: 'IdPuesto', match: 'idPuesto'}],
        outputParams: [],
        multiFila: true,
    },

    DesasociarPuesto: {
        nombre: 'SP_MaquinaDesasociarPuesto',
        inputParams: [
        {nombre: 'IdPuesto', match: 'idPuesto'}],
        outputParams: [],
        multiFila: true,
    },


    ActualizarConfiguracionesPines:{
        nombre: 'SP_MaquinaActualizarConfiguracionPines',
        inputParams: [
            {nombre: 'IdMaquina', match: 'idMaquina'},
            {nombre: 'EsPulsoManual', match: 'esPulsoManual'},
            {nombre: 'ProductoPorPulso', match: 'productoPorPulso'},
            {nombre: 'PinPulso', match: 'pinPulso'},
            {nombre: 'DescontarAuto', match: 'descontarAuto'},
        ],
        outputParams: [],
        multiFila: false,
    }
}