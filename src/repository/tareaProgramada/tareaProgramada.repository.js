
var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;

function TareaProgramadaRepository(dbContext) {

    function getTareasProgramadasEnMaquina(req, res, next) {
        const { codigoMaquina } = req.params
        if (!codigoMaquina) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoMaquina', type: TYPES.NVarChar, val: codigoMaquina });
            dbContext.post('SP_ObtenerTareasProgramadasMaquina', parameters, (err, data) => {
                return res.json(response(data, err))
            })
        }
    }

    function programarTareaMaquina(req, res, next) {
        const { codigoMaquina, codigoEtiqueta } = req.body
        if (!codigoMaquina || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoMaquina', type: TYPES.NVarChar, val: codigoMaquina });
            parameters.push({ name: 'CodigoEtiqueta', type: TYPES.NVarChar, val: codigoEtiqueta });
            dbContext.post('SP_ProgramarTareaPDA', parameters, (err, data) => {
                parameters =[]
                parameters.push({ name: 'CodigoMaquina', type: TYPES.NVarChar, val: codigoMaquina });
                if(!err){
                    dbContext.post('SP_ObtenerTareasProgramadasMaquina', parameters, (err, data) => {
                        res.json(response(data,err))
                    })
                }
                else{
                    return res.json(response(data, err))
                }
            })
        }
    }


    return {
        getTareasProgramadasEnMaquina,
        programarTareaMaquina
    }
}

module.exports = TareaProgramadaRepository;