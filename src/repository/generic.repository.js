const response = require('../shared/response');

function GenericRepository() {
    async function execute(dbContext, params, sp, req, res, next) {
        try {
            const parameters = []
            for (const inputParam of sp.inputParams) {
                if (typeof params[inputParam.match] == 'undefined' || params[inputParam.match] == null) {
                    throw Error(`Parametro ${inputParam.match} no suministrado. En ${sp.nombre}`)
                }
                parameters.push({ name: inputParam.nombre, value: params[inputParam.match] })
            }

            const result = await dbContext.execSp(sp.nombre, parameters)
            const json = response(result, multiple = sp.multiFila)

            return res.json(json)
        } catch (err) {
            console.error(`Error al ejecutar ${sp.nombre}`)
            console.error(err)
            res.sendStatus(500)
        }
    }

    return {
        execute
    }
}

module.exports = GenericRepository;