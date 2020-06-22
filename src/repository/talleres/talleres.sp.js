module.exports = {
    BuscarTodos: {
        nombre: 'SP_BuscarTodosTalleres',
        inputParams: [
        ],
        outputParams: [],
        multiFila: true,
    },
    EnviarPrepaquete: {
        nombre: 'SP_EnviarPrepaqueteTaller',
        inputParams: [
            { nombre: 'IdTaller', match: 'idTaller' },
            { nombre: 'CodPrepaquete', match: 'codPrepaquete' },
            { nombre: 'Seccion', match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: false,
    },
    RecibirPrepaquete: {
        nombre: 'SP_RecibirPrepaqueteTaller',
        inputParams: [
            { nombre: 'IdTaller', match: 'idTaller' },
            { nombre: 'CodPrepaquete', match: 'codPrepaquete' },
            { nombre: 'Seccion', match: 'codSeccion' },
        ],
        outputParams: [],
        multiFila: true,
    },
}