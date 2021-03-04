const BancadaRepository = require("./bancada.repository");
const dbContext = require("../../database/dbContext");

module.exports = function (router) {
  const bancadaRepository = BancadaRepository(dbContext);

  /**
   * Busca la bancada con id :id
   * bancadas/10
   */
  router.route("/bancadas/:id").get(bancadaRepository.buscarPorId);

  /**
   * Busca las maquinas pertenecientes a la bancada con id dado
   * bancadas/maquinas?idBancada=10
   */
  router.route("/bancadas/maquinas").get(bancadaRepository.buscarMaquinas);

  router.route("/bancadas/crear").post(bancadaRepository.crear);

  router.route("/bancadas/actualizar").post(bancadaRepository.actualizar);

  router
    .route("/bancadas/buscarPorCodigoEtiqueta/:codigoEtiqueta")
    .get(bancadaRepository.buscarPorCodigoEtiqueta);

  router
    .route("/bancadas/buscarPorDescripcion/:descripcion")
    .get(bancadaRepository.buscarPorDescripcion);

  router
    .route("/bancadas/actualizarIncidencia")
    .post(bancadaRepository.actualizarIncidencia);

  router.route("/bancadas/:id").get(bancadaRepository.obtenerPorId);

  router
    .route("/bancadas/obtenerConfiguracionesIncidencias/:id")
    .get(bancadaRepository.obtenerConfiguracionesIncidencias);

  router
    .route("/bancadas/obtenerConfiguracionesPins/:id")
    .get(bancadaRepository.obtenerConfiguracionesPins);

  router
    .route("/bancadas/obtenerMaquinas/:id")
    .get(bancadaRepository.obtenerMaquinas);

  router
    .route("/bancadas/entradaOperarioPorCodigoObrero")
    .post(bancadaRepository.entradaOperarioPorCodigoObrero);

  router
    .route("/bancadas/salidaOperarioPorCodigoObrero")
    .post(bancadaRepository.salidaOperarioPorCodigoObrero);

  router
    .route("/bancadas/buscarOperariosActuales/:id")
    .get(bancadaRepository.buscarOperariosActuales);
};
