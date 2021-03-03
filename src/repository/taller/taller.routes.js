const TallerRepository = require("./taller.repository");
const dbContext = require("../../database/dbContext");

module.exports = function (router) {
  const tallerRepository = TallerRepository(dbContext);

  router.route("/talleres").get(tallerRepository.buscarTodos);

  router
    .route("/talleres/recibir/:idTaller/:codBarquilla/:codSeccion")
    .get(tallerRepository.recibirBarquilla);

  router
    .route("/talleres/leer/:idTaller/:codBarquilla/:codSeccion")
    .get(tallerRepository.enviarBarquilla);
};
