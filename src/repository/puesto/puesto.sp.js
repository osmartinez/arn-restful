
module.exports = {
    Crear: {
        nombre: 'SP_PuestoCrear',
        inputParams: [
            { nombre: 'Descripcion', match: 'descripcion' },
            { nombre: 'Observaciones', match: 'observaciones' },
            { nombre: 'PinLed', match: 'pinLed' },
            { nombre: 'PinBuzzer', match: 'pinBuzzer' },
        ],
        outputParams: [],
        multiFila: false,
    },
    Actualizar:{
        nombre: 'SP_PuestoActualizar',
        inputParams: [
            { nombre: 'Id', match: 'id' },
            { nombre: 'Descripcion', match: 'descripcion' },
            { nombre: 'Observaciones', match: 'observaciones' },
            { nombre: 'PinLed', match: 'pinLed' },
            { nombre: 'PinBuzzer', match: 'pinBuzzer' },
        ],
        outputParams: [],
        multiFila: false,
    },
    BuscarPorDescripcion:{
        nombre: 'SP_PuestoBuscarPorDescripcion',
        inputParams: [
            { nombre: 'Descripcion', match: 'descripcion' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarPorCodigoEtiqueta:{
        nombre: 'SP_PuestoBuscarPorCodigoEtiqueta',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },
    ActualizarIncidencia:{
        nombre: 'SP_PuestoActualizarConfiguracionIncidencias',
        inputParams: [
            { nombre: 'Id', match: 'id' },
            { nombre: 'Nombre', match: 'nombre' },
            { nombre: 'Habilitada', match: 'habilitada' },
            { nombre: 'PinNotificacion1', match: 'pinNotificacion1' },
            { nombre: 'PinNotificacion2', match: 'pinNotificacion2' },
            { nombre: 'AvisarA', match: 'avisarA' },
            { nombre: 'Corregible', match: 'corregible' },
            { nombre: 'SegundosEjecucion', match: 'segundosEjecucion' },
            { nombre: 'IdPuesto', match: 'idPuesto' },
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerTodos:{
        nombre: 'SP_PuestoObtenerTodos',
        inputParams: [
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerPorId:{
        nombre: 'SP_PuestoBuscarPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: false,
    },

    ObtenerConfiguracionesIncidenciasPorId:{
        nombre: 'SP_PuestoBuscarConfiguracionesIncidenciasPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerConfiguracionesPinsPorId:{
        nombre: 'SP_PuestoBuscarConfiguracionesPinsPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: false,
    },

    ObtenerMaquinasPorId:{
        nombre: 'SP_PuestoBuscarMaquinasPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: true,
    },
    EntradaOperarioPorCodigoObrero:{
        nombre: 'SP_PuestoRegistroEntradaOperarioPorCodigo',
        inputParams: [
            { nombre: 'Codigo', match: 'codigoObrero' },
            {nombre: 'IdPuesto', match: 'idPuesto'}
        ],
        outputParams: [],
        multiFila: true,
    },
    SalidaOperarioPorCodigoObrero:{
        nombre: 'SP_PuestoRegistroSalidaOperarioPorCodigo',
        inputParams: [
            { nombre: 'Codigo', match: 'codigoObrero' },
            {nombre: 'IdPuesto', match: 'idPuesto'}
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarOperariosActuales:{
        nombre: 'SP_PuestoOperariosActuales',
        inputParams: [
            {nombre: 'IdPuesto', match: 'id'}
        ],
        outputParams: [],
        multiFila: true,
    },
}