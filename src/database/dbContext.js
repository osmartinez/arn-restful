const sql = require('mssql')
var { poolPromise } = require('./connect');

const exec_procedure = async function (proc_name, input_params=[], output_params = []) {
    try {
        const pool = await poolPromise
        const request = await pool.request()
        for (let param of input_params) {
            request.input(param.name,param.tipo, param.value)
        }

        for (let param of output_params) {
            request.output_params(param.name, param.value)
        }

        let result = await request.execute(proc_name)
        return result
    }
    catch (exception) {
        console.error(exception)
    }
}

module.exports = {
    execSp: exec_procedure,
};