module.exports = {
    BuscarPorIdParaPuesto: {
        nombre: 'SP_OrdenFabricacionOperacionBuscarPorId',
        inputParams: [{ nombre: 'IdOperacion', match: 'idOperacion' }],
        outputParams: [],
        multiFila: true,
    },
    BuscarMaterias: {
        nombre: 'SP_OrdenFabricacionOperacionBuscarMaterias',
        inputParams: [{ nombre: 'IdOperacion', match: 'idOperacion' }],
        outputParams: [],
        multiFila: true,
    },
}