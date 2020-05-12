const response = require('../shared/response');

function GenericRepository() {
    async function execute(dbContext, params, sp, req, res, next) {
        try {
            const parameters = []
            for (const inputParam of sp.inputParams) {
                if (!params[inputParam.match]) {
                    trow (`Parametro ${inputParam.match} no suministrado.`)
                }
                parameters.push({ name: inputParam.nombre, value: params[inputParam.match] })
            }

            const result = await dbContext.exeSp(sp.nombre, parameters)
            return res.json(response(result, multiple = sp.multiFila))
        } catch (err) {
            console.error(err);
            res.sendStatus(500)
        }
    }

    return {
        execute
    }
}

module.exports = GenericRepository;