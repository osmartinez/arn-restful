module.exports = {
    BuscarPorId: {
        nombre: 'SP_MoldesObtenerBancadaPorId',
        inputParams: [{ nombre: 'IdBancada', match: 'idBancada' }],
        outputParams: [],
        multiFila: false,
    },
    BuscarMoldesBancada:{
        nombre: 'SP_MoldesObtenerMaquinasPorIdBancada',
        inputParams: [{ nombre: 'IdBancada', match: 'idBancada' }],
        outputParams: [],
        multiFila: true,
    },
    Crear: {
        nombre: 'SP_BancadaCrear',
        inputParams: [
            { nombre: 'Descripcion', match: 'descripcion' },
            { nombre: 'Observaciones', match: 'observaciones' },
            { nombre: 'PinLed', match: 'pinLed' },
            { nombre: 'PinBuzzer', match: 'pinBuzzer' },
            { nombre: 'ContadorPaquetes', match: 'contadorPaquetes' },
            { nombre: 'EsContadorPaquetesAutomatico', match: 'esContadorPaquetesAutomatico' },
            { nombre: 'EsManual', match: 'esManual' },
        ],
        outputParams: [],
        multiFila: false,
    },
    Actualizar: {
        nombre: 'SP_BancadaActualizar',
        inputParams: [
            { nombre: 'Id', match: 'id' },
            { nombre: 'Descripcion', match: 'descripcion' },
            { nombre: 'Observaciones', match: 'observaciones' },
            { nombre: 'PinLed', match: 'pinLed' },
            { nombre: 'PinBuzzer', match: 'pinBuzzer' },
            { nombre: 'ContadorPaquetes', match: 'contadorPaquetes' },
            { nombre: 'EsContadorPaquetesAutomatico', match: 'esContadorPaquetesAutomatico' },
            { nombre: 'EsManual', match: 'esManual' },

        ],
        outputParams: [],
        multiFila: false,
    },
    BuscarPorDescripcion: {
        nombre: 'SP_BancadaBuscarPorDescripcion',
        inputParams: [
            { nombre: 'Descripcion', match: 'descripcion' },
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarPorCodigoEtiqueta: {
        nombre: 'SP_BancadaBuscarPorCodigoEtiqueta',
        inputParams: [
            { nombre: 'CodigoEtiqueta', match: 'codigoEtiqueta' },
        ],
        outputParams: [],
        multiFila: true,
    },
    ActualizarIncidencia: {
        nombre: 'SP_BancadaActualizarConfiguracionIncidencias',
        inputParams: [
            { nombre: 'Id', match: 'id' },
            { nombre: 'Nombre', match: 'nombre' },
            { nombre: 'Habilitada', match: 'habilitada' },
            { nombre: 'PinNotificacion1', match: 'pinNotificacion1' },
            { nombre: 'PinNotificacion2', match: 'pinNotificacion2' },
            { nombre: 'AvisarA', match: 'avisarA' },
            { nombre: 'Corregible', match: 'corregible' },
            { nombre: 'SegundosEjecucion', match: 'segundosEjecucion' },
            { nombre: 'IdBancada', match: 'idBancada' },
            { nombre: 'Bloqueante', match: 'bloqueante' },
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerTodos: {
        nombre: 'SP_BancadaObtenerTodos',
        inputParams: [
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerPorId: {
        nombre: 'SP_BancadaBuscarPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: false,
    },

    ObtenerConfiguracionesIncidenciasPorId: {
        nombre: 'SP_BancadaBuscarConfiguracionesIncidenciasPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: true,
    },

    ObtenerConfiguracionesPinsPorId: {
        nombre: 'SP_BancadaBuscarConfiguracionesPinsPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: false,
    },

    ObtenerMaquinasPorId: {
        nombre: 'SP_BancadaBuscarMaquinasPorId',
        inputParams: [
            { nombre: 'Id', match: 'id' },
        ],
        outputParams: [],
        multiFila: true,
    },
    EntradaOperarioPorCodigoObrero: {
        nombre: 'SP_BancadaRegistroEntradaOperarioPorCodigo',
        inputParams: [
            { nombre: 'Codigo', match: 'codigoObrero' },
            { nombre: 'IdBancada', match: 'idBancada' }
        ],
        outputParams: [],
        multiFila: true,
    },
    SalidaOperarioPorCodigoObrero: {
        nombre: 'SP_BancadaRegistroSalidaOperarioPorCodigo',
        inputParams: [
            { nombre: 'Codigo', match: 'codigoObrero' },
            { nombre: 'IdBancada', match: 'idBancada' }
        ],
        outputParams: [],
        multiFila: true,
    },
    BuscarOperariosActuales: {
        nombre: 'SP_BancadaOperariosActuales',
        inputParams: [
            { nombre: 'Id', match: 'id' }
        ],
        outputParams: [],
        multiFila: true,
    },
}