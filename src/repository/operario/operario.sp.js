module.exports = {
    Buscar: {
        nombre: 'SP_BuscarOperarioPorId',
        inputParams: [{ nombre: 'IdOperario', match: 'idOperario' }],
        outputParams: [],
        multiFila: false,
    },

    EntradaPuesto: {
        nombre: 'SP_RegistrarEntradaOperarioPuesto',
        inputParams: [{ nombre: 'CodigoOperario', match: 'codigoOperario' },
        { nombre: 'IdMaquina', match: 'idMaquina' }],
        outputParams: [],
        multiFila: false,
    },

    SalidaPuesto: {
        nombre: 'SP_RegistrarSalidaOperarioPuesto',
        inputParams: [{ nombre: 'CodigoOperario', match: 'codigoOperario' },
        { nombre: 'IdMaquina', match: 'idMaquina' }],
        outputParams: [],
        multiFila: false,
    },
}