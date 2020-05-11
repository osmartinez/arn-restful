
var response = require('../../shared/response');

function MaquinaRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        const { codigoMaquina } = req.params
        if (!codigoMaquina) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoMaquina', value: codigoMaquina });
            try {
                const result = await dbContext.execSp('SP_BuscarMaquinaPorCodigo', parameters)
                return res.json(response(result,multiple=false))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }


    return {
        buscarPorCodigo,
    }
}

module.exports = MaquinaRepository;