module.exports = {
    BuscarPorId: {
        nombre: 'SP_MoldesObtenerBancadaPorId',
        inputParams: [{ nombre: 'IdBancada', match: 'idBancada' }],
        outputParams: [],
        multiFila: false,
    },
    BuscarMoldesBancada:{
        nombre: 'SP_MoldesObtenerMaquinasPorIdBancada',
        inputParams: [{ nombre: 'IdBancada', match: 'idBancada' }],
        outputParams: [],
        multiFila: true,
    }
}