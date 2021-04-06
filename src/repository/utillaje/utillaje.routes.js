const UtillajeRepository = require("./utillaje.repository");
const dbContext = require("../../database/dbContext");

module.exports = function (router) {
  const utillajeRepository = UtillajeRepository(dbContext);

  router
    .route(
      "/utillajes/localizarPorOrdenFabricacionSeccion/:idOrden/:codSeccion"
    )
    .get(utillajeRepository.localizarPorOrdenFabricacionSeccion);

  router
    .route(
      "/utillajes/localizarPorOrdenFabricacionOperacionSeccion/:idOperacion/:codSeccion"
    )
    .get(utillajeRepository.localizarPorOrdenFabricacionOperacionSeccion);

  router
    .route(
      "/utillajes/localizarPorPrepaqueteSeccion/:codigoPrepaquete/:codSeccion"
    )
    .get(utillajeRepository.localizarPorPrepaqueteSeccion);

  router
    .route(
      "/utillajes/localizarPorBarquillaSeccion/:codigoPrepaquete/:codSeccion"
    )
    .get(utillajeRepository.localizarPorBarquillaSeccion);

  router
    .route(
      "/utillajes/buscarImpresionMarcajePorUtillajeTalla/:codigoUtillaje/:talla"
    )
    .get(utillajeRepository.buscarImpresionMarcajePorUtillajeTalla);

  router
    .route("/utillajes/guardarImpresionMarcajePorUtillajeTalla")
    .post(utillajeRepository.guardarImpresionMarcajePorUtillajeTalla);

  router
    .route("/utillajes/buscarUbicaciones/porBarquilla/:codigoEtiqueta")
    .get(utillajeRepository.buscarPorBarquilla);

  router
    .route("/utillajes/buscarUbicaciones/porOperacion/:idOperacion")
    .get(utillajeRepository.buscarPorOperacion);

  router
    .route("/utillajes/buscarUbicaciones/porCodigoUtillaje/:codUtillaje")
    .get(utillajeRepository.buscarPorCodigoUtillaje);

    router
    .route("/utillajes/ubicar/porEtiqueta")
    .post(utillajeRepository.ubicarPorEtiqueta);
};