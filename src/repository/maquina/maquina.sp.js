const sql = require('mssql')
module.exports = {
    BuscarPorCodigo: {
        nombre: 'SP_BuscarMaquinaPorCodigo',
        inputParams: [{ nombre: 'CodigoMaquina',tipo: sql.NVarChar, match: 'codigoMaquina' }],
        outputParams: [],
        multiFila: false,
    },
}