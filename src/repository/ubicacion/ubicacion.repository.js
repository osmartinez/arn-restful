
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

    async function agruparContenedor(req, res, next) {
        const { codigoAgrupacion, codigoEtiqueta } = req.body
        if (!codigoAgrupacion || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoAgrupacion', value: codigoAgrupacion });
            parameters.push({ name: 'CodigoEtiqueta', value: codigoEtiqueta });

            try {
                const result = await dbContext.execSp('SP_AgruparContenedor', parameters)
                return res.json(response(result))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function ubicarPrepaquete(req, res, next) {
        const { codigoUbicacion, codigoEtiqueta } = req.body
        if (!codigoUbicacion || !codigoEtiqueta) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoUbicacion', value: codigoUbicacion });
            parameters.push({ name: 'CodigoPrepaquete', value: codigoEtiqueta });

            try {
                const result = await dbContext.execSp('SP_UbicarPrepaquete', parameters)
                return res.json(response(result))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function vaciarUbicacion(req,res, next){
        const { codigoUbicacion } = req.body
        if (!codigoUbicacion) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoUbicacion', value: codigoUbicacion });

            try {
                const result = await dbContext.execSp('SP_VaciarUbicacion', parameters)
                return res.json(response(result))
            }catch (err) {
                res.sendStatus(500)
            }
        }
    }

    async function vaciarAgrupacion(req,res, next){
        const { codigoAgrupacion } = req.body
        if (!codigoAgrupacion) {
            return res.sendStatus(404);
        }
        else {
            var parameters = []
            parameters.push({ name: 'CodigoAgrupacion', value: codigoAgrupacion });

            try {
                const result = await dbContext.execSp('SP_VaciarAgrupacion', parameters)
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
        vaciarUbicacion,
        vaciarAgrupacion,
        agruparContenedor,

    }
}

module.exports = UbicacionRepository;