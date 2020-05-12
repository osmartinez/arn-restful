
var response = require('../../shared/response');

function UbicacionRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        const { codigoUbicacion } = req.params
        if (!codigoUbicacion) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoUbicacion', value: codigoUbicacion });
            try {
                const result = await dbContext.execSp('SP_BuscarUbicacionPorCodigo', parameters)
                return res.json(response(result,multiple=false))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function ubicarAgrupacion(req, res, next) {
        const { codigoUbicacion, codigoAgrupacion } = req.body
        if (!codigoUbicacion || !codigoAgrupacion) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoUbicacion', value: codigoUbicacion });
            parameters.push({ name: 'CodigoAgrupacion', value: codigoAgrupacion });

            try {
                const result = await dbContext.execSp('SP_UbicarAgrupacion', parameters)
                return res.json(response(result))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function ubicarContenedor(req, res, next) {
        const { codigoUbicacion, codigoEtiqueta } = req.body
        if (!codigoUbicacion || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoUbicacion', value: codigoUbicacion });
            parameters.push({ name: 'CodigoEtiqueta', value: codigoEtiqueta });

            try {
                const result = await dbContext.execSp('SP_UbicarContenedor', parameters)
                return res.json(response(result))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function ubicarPrepaquete(req, res, next) {
        const { codigoUbicacion, codigoPrepaquete } = req.body
        if (!codigoUbicacion || !codigoPrepaquete) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoUbicacion', value: codigoUbicacion });
            parameters.push({ name: 'CodigoPrepaquete', value: codigoPrepaquete });

            try {
                const result = await dbContext.execSp('SP_UbicarPrepaquete', parameters)
                return res.json(response(result))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    return {
        buscarPorCodigo,
        ubicarAgrupacion,
        ubicarContenedor,
        ubicarPrepaquete,
    }
}

module.exports = UbicacionRepository;