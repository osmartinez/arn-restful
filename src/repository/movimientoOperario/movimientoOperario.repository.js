const MovimientoOperario = require('../../models/movimientoOperario.model')
const OperarioRawRepository = require('../operario/operario.raw.repository');
const dbContext = require('../../database/dbContext');

function MovimientoOperarioRepository() {

    async function entrar(req, res, next) {
        let { codigo, idPuesto } = req.body
        try {
            if (!isNaN(codigo)) {
                codigo = 'B00' + codigo
            }

            let movimientoActual = await MovimientoOperario.findOne({ idPuestoSql: idPuesto, codigoOperarioSql: codigo, fechaSalida: null })
            if (movimientoActual != null) {
                throw new Error('Ya estás registrado en este puesto')
            }
            else {
                const operarioRepository = OperarioRawRepository(dbContext);
                const operario = await operarioRepository.buscarPorCodigo(codigo)
                if (operario == null || !operario.Id) {
                    throw new Error('No existe el operario')
                }
                else {
                    movimientoActual = new MovimientoOperario({
                        idPuestoSql: idPuesto,
                        codigoOperarioSql: codigo,
                        nombre: operario.Nombre,
                        apellidos: operario.Apellidos,
                        idOperarioSql: operario.Id,
                    })
                    await movimientoActual.save()

                    const movimientos = await MovimientoOperario.find({ idPuestoSql: idPuesto, fechaSalida: null })
                    res.json(movimientos)
                }
            }
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: String(error) })
        }
    }

    async function salir(req, res, next) {
        let { codigo, idPuesto } = req.body

        try {
            if (!isNaN(codigo)) {
                codigo = 'B00' + codigo
            }

            let movimientoActual = await MovimientoOperario.findOne({ idPuestoSql: idPuesto, codigoOperarioSql: codigo, fechaSalida: null })


            const operarioRepository = OperarioRawRepository(dbContext);
            const operario = await operarioRepository.buscarPorCodigo(codigo)
            if (operario == null) {
                throw new Error('No existe el operario')
            }
            else {
                if (movimientoActual != null) {
                    movimientoActual.fechaSalida = Date.now()
                    await movimientoActual.save()
                }

                const movimientos = await MovimientoOperario.find({ idPuestoSql: idPuesto, fechaSalida: null })
                res.json(movimientos)
            }

        } catch (err) {
            console.error(err)
            res.status(500).json({
                message: err
            })
        }
    }

    async function buscarTodos(req, res, next) {
        let { idPuesto } = req.query

        try {

            const movimientos = await MovimientoOperario.find({ idPuestoSql: idPuesto, fechaSalida: null })
            res.json(movimientos)
        } catch (err) {
            console.error(err)
            res.status(500).json({
                message: err
            })
        }
    }

    return {
        entrar,
        salir,
        buscarTodos,
        
    }
}

module.exports = MovimientoOperarioRepository;