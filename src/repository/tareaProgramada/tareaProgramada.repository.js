
var response = require('../../shared/response');
var TYPES = require('mssql').TYPES;

function TareaProgramadaRepository(dbContext) {

    async function getTareasProgramadasEnMaquina(req, res, next) {
        const { codigoMaquina } = req.params
        if (!codigoMaquina) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoMaquina', value: codigoMaquina });
            try {
                const result = await dbContext.execSp('SP_ObtenerTareasProgramadasMaquina', parameters)
                return res.json(response(result))
            } catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function programarTareaMaquina(req, res, next) {
        const { codigoMaquina, codigoEtiqueta } = req.body
        if (!codigoMaquina || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoMaquina', value: codigoMaquina });
            parameters.push({ name: 'CodigoEtiqueta', value: codigoEtiqueta });
            try {
                var result = await dbContext.execSp('SP_ProgramarTareaPDA', parameters)
                parameters = []
                parameters.push({ name: 'CodigoMaquina', value: codigoMaquina });
                result = await dbContext.execSp('SP_ObtenerTareasProgramadasMaquina', parameters)
                res.json(response(result))
            } catch (err) {
                console.log(err)
                res.sendStatus(500)
            }
        }
    }

    async function consumirTareaMaquina(req, res, next) {
        const { codigoMaquina, codigoEtiqueta } = req.body
        if (!codigoMaquina || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            console.log()
            var parameters = []
            parameters.push({ name: 'CodigoMaquina', value: codigoMaquina });
            parameters.push({ name: 'CodigoEtiqueta', value: codigoEtiqueta });
            try {
                var result = await dbContext.execSp('SP_ConsumirEtiqueta', parameters)
                res.json(response(result))
            } catch (err) {
                console.log(err)
                res.sendStatus(500)
            }
        }
    }

    async function desconsumirTareaMaquina(req, res, next) {
        const { idMaquina, codigoEtiqueta } = req.body
        if (!idMaquina || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            console.log()
            var parameters = []
            parameters.push({ name: 'IdMaquina', value: idMaquina });
            parameters.push({ name: 'CodigosEtiquetas', value: codigoEtiqueta });
            try {
                var result = await dbContext.execSp('SP_DesconsumirEtiquetas', parameters)
                res.json(response(result))
            } catch (err) {
                console.log(err)
                res.sendStatus(500)
            }
        }
    }

    return {
        getTareasProgramadasEnMaquina,
        programarTareaMaquina,
        consumirTareaMaquina,
        desconsumirTareaMaquina,
    }
}

module.exports = TareaProgramadaRepository;