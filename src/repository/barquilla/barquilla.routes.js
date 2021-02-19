const BarquillaRepository = require("./barquilla.repository");
const dbContext = require("../../database/dbContext");

module.exports = function (router) {
  const barquillaRepo = BarquillaRepository(dbContext);

  /**
   * Busca las operaciones en una seccion de una etiqueta
   */
  router
    .route("/barquillas/buscarOperacionesEnSeccion/:codigoEtiqueta/:codigoSeccion")
    .get(barquillaRepo.buscarOperacionesEnSeccion);

    /**
   * Busca las informacion de barquilla en una seccion
   */
  router
    .route("/barquillas/buscarInformacionEnSeccion/:codigoEtiqueta/:codigoSeccion")
    .get(barquillaRepo.buscarInformacionEnSeccion);


  /**
   * Busca las operaciones en una seccion de una etiqueta
   */
  router
    .route("/barquillas/consumirOperacion")
    .post(barquillaRepo.consumirBarquilla);

  /**
   * Busca las operaciones en una seccion de una etiqueta
   */
  router
  .route("/barquillas/obtenerSiguienteOrdenAgrupacion")
  .post(barquillaRepo.obtenerSiguienteOrdenAgrupacion);

};
