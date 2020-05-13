const sql = require('mssql')
module.exports = {
    ListarTareasProgramadasEnMaquina: {
        nombre: 'SP_ObtenerTareasProgramadasMaquina',
        inputParams: [{ nombre: 'CodigoMaquina',tipo: sql.NVarChar, match: 'codigoMaquina' }],
        outputParams: [],
        multiFila: true,
    },

    ProgramarTareaMaquina: {
        nombre: 'SP_ProgramarTareaPDA',
        inputParams: [
            { nombre: 'CodigoMaquina',tipo: sql.NVarChar, match: 'codigoMaquina' },
            { nombre: 'CodigoEtiqueta',tipo: sql.NVarChar, match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: false,
    },

    ConsumirEtiqueta: {
        nombre: 'SP_ConsumirEtiqueta',
        inputParams: [
            { nombre: 'CodigoMaquina', tipo: sql.NVarChar,match: 'codigoMaquina' },
            { nombre: 'CodigoEtiqueta',tipo: sql.NVarChar, match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },

    DesconsumirEtiqueta: {
        nombre: 'SP_DesconsumirEtiquetas',
        inputParams: [
            { nombre: 'IdMaquina',tipo: sql.Int, match: 'idMaquina' },
            { nombre: 'CodigosEtiquetas',tipo: sql.NVarChar, match: 'codigoEtiqueta' }
        ],
        outputParams: [],
        multiFila: true,
    },
}