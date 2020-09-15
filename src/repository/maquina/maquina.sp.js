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
        nombre: 'SP_AsociarMaquinaAPuesto',
        inputParams: [{nombre: 'IdMaquina', match: 'idMaquina'},
        {nombre: 'IdPuesto', match: 'idPuesto'}],
        outputParams: [],
        multiFila: true,
    },
}