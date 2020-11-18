const Tarea = require('../../models/tarea.model')
const MovimientoOperario = require('../../models/movimientoOperario.model')
const MovimientoPulso = require('../../models/movimientoPulso.model')
const Maquina = require('../../models/maquina.model')
const DetalleTarea = require('../../models/detalleTarea.model')

function TareaNoSQLRepository() {

    async function comenzar(req, res, next) {
        const tarea = req.body

        const operariosActuales = await MovimientoOperario.find({ idPuestoSql: tarea.idPuestoSql, fechaSalida: null })
        if (operariosActuales == null || operariosActuales.length == 0) {
            return res.status(400).json({
                message: 'No hay operarios registrados'
            })
        }
        else {
            let tareaActual = await Tarea.findOne({ "idPuestoSql": tarea.idPuestoSql, terminado: false })
            if (tareaActual == null) {
                tareaActual = new Tarea({
                    idPuestoSql: tarea.idPuestoSql,
                    etiquetaFichada: tarea.etiquetaFichada,
                    utillaje: tarea.utillaje,
                    tallaUtillaje: tarea.tallaUtillaje,
                    maquinas: [],
                })
                for (const maquina of tarea.maquinas) {
                    const maquinaNoSql = new Maquina({
                        idSql: maquina.idSql,
                        nombre: maquina.nombre,
                        codSeccion: maquina.codSeccion,
                        detallesTarea: [],
                    })

                    for (const detalle of maquina.detallesTarea) {
                        const detalleNoSQL = new DetalleTarea({
                            idSql: detalle.idSql,
                            codigoOrden: detalle.codigoOrden,
                            cliente: detalle.cliente,
                            modelo: detalle.modelo,
                            referencia: detalle.referencia,
                            tallasArticulo: detalle.tallasArticulo,
                            cantidadFabricar: detalle.cantidadFabricar,
                            cantidadFabricada: detalle.cantidadFabricada,
                            descripcionOperacion: detalle.descripcionOperacion,
                            pedidoLinea: detalle.pedidoLinea,
                        })
                        maquinaNoSql.detallesTarea.push(detalleNoSQL)
                    }

                    tareaActual.maquinas.push(maquinaNoSql)
                }

                await tareaActual.save()

                return res.json(tareaActual)
            }
            else {
                return res.status(500).json({
                    message: 'Hay una tarea en curso'
                })
            }
        }
    }

    async function finalizar(req, res, next) {
        const { idPuesto } = req.body
        let tareaActual = await Tarea.findOne({ "idPuestoSql": idPuesto, terminado: false })
        if (tareaActual != null) {
            tareaActual.terminado = true
            tareaActual.fechaFin = Date.now()
            await tareaActual.save()
            tareaActual = await Tarea.findOne({ "idPuestoSql": idPuesto, terminado: false })
        }

        return res.json(tareaActual)
    }

    async function obtenerTareaPuesto(req, res, next) {
        const { idPuesto } = req.query
        let tareaActual = await Tarea.findOne({ idPuestoSql: idPuesto, terminado: false })
        return res.json(tareaActual)
    }

    async function sumarPares(req,res,next){
        const {idPuesto, pares} = req.body

        let tareaActual = await Tarea.findOne({ "idPuestoSql": idPuesto, terminado: false })

        if(tareaActual == null){
            res.status(500).json({
                message: 'No hay tarea cargada'
            })
        }
        else{
            tareaActual.cantidadFabricadaPuesto.push(new MovimientoPulso({
                cantidad: Number(pares)
            }))
            await tareaActual.save()
            res.status(200).json({message:"ok"})
        }
    }

    async function sumarDefectuosas(req,res,next){
        const {idPuesto, defectuosas} = req.body

        let tareaActual = await Tarea.findOne({ "idPuestoSql": idPuesto, terminado: false })

        if(tareaActual == null){
            res.status(500).json({
                message: 'No hay tarea cargada'
            })
        }
        else{
            tareaActual.cantidadDefectuosaPuesto.push(new MovimientoPulso({
                cantidad: Number(defectuosas)
            }))
            await tareaActual.save()
            res.json(tareaActual)
        }
    }

    async function sumarSaldos(req,res,next){
        const {idPuesto, saldos} = req.body

        let tareaActual = await Tarea.findOne({ "idPuestoSql": idPuesto, terminado: false })

        if(tareaActual == null){
            res.status(500).json({
                message: 'No hay tarea cargada'
            })
        }
        else{
            tareaActual.cantidadSaldosPuesto.push(new MovimientoPulso({
                cantidad: Number(saldos)
            }))
            await tareaActual.save()
            res.json(tareaActual)
        }
    }

    return {
        comenzar,
        obtenerTareaPuesto,
        finalizar,
        sumarDefectuosas,
        sumarSaldos,
        sumarPares,

    }
}

module.exports = TareaNoSQLRepository;