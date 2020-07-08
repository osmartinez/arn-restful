const response = require('../shared/response');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');

function GenericRepository() {
    async function execute(dbContext, params, sp, req, res, next) {
        try {
            console.log(params)
            const parameters = []
            for (const inputParam of sp.inputParams) {
                if (typeof params[inputParam.match] == 'undefined' || params[inputParam.match] == null) {
                    throw Error(`Parametro ${inputParam.match} no suministrado. En ${sp.nombre}`)
                }
                parameters.push({ name: inputParam.nombre, value: params[inputParam.match] })
            }

            const result = await dbContext.execSp(sp.nombre, parameters)
            const json = response(result, multiple = sp.multiFila)

            if (sp.publicarMensaje) {
                try {
                    var client = mqtt.connect('mqtt://localhost:1883');
                    client.on('connect', function () {
                        client.publish(sp.datosPublicacion.topic, JSON.stringify(json))
                        client.end()
                    });
                } catch (err1) {
                    console.error(`Error al publicar MQTT ${sp.nombre}`)
                    console.error(err1)
                }
            }

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