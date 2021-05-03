const MaquinaRepository = require("./maquina.repository");
const dbContext = require("../../database/dbContext");

module.exports = function (router) {
  const maquinaRepository = MaquinaRepository(dbContext);

  /**
   * Busca una maquina por su codigo de etiqueta
   */
  router
    .route("/maquinas/:codigoMaquina")
    .get(maquinaRepository.buscarPorCodigo);

  /**
   * Busca todas las maquinas
   */
  router.route("/maquinas").get(maquinaRepository.buscarTodas);

  /**
   * Busca todas las maquinas de una seccion
   */
  router
    .route("/maquinas/enSeccion/:codSeccion")
    .get(maquinaRepository.buscarTodasEnSeccion);

  /**
   * Asocia una maquina a un puesto
   */
  router
    .route("/maquinas/asociarAPuesto")
    .post(maquinaRepository.asociarAPuesto);

  /**
   * desasocia una maquina de un puesto
   */
  router
    .route("/maquinas/desasociarPuesto")
    .post(maquinaRepository.desasociarPuesto);

  /**
   * actualiza la configuracion de los pines de una maquina
   */
  router
    .route("/maquinas/actualizarConfiguracionPines")
    .post(maquinaRepository.actualizarConfiguracionPines);

  /**
   * actualiza la posicion de una maquina en la interfaz
   */
  router
    .route("/maquinas/actualizarPosicionUI")
    .post(maquinaRepository.actualizarPosicionUI);

  /**
   * pone una tarea al principio de la cola de tareas de maquina
   */
  router
    .route("/maquinas/asignarTareaEjecucion")
    .post(maquinaRepository.asignarTareaEjecucion);

  /**
   * quita una tarea de la cola de tareas de maquina
   */
  router
    .route("/maquinas/desasignarTareaEjecucion")
    .post(maquinaRepository.desasignarTareaEjecucion);

    /**
     * actualiza la posicion de una tarea en la cola
     */
    router
    .route("/maquinas/actualizarPosicionTarea")
    .post(maquinaRepository.actualizarPosicionTarea);


  /**
   * programa una tarea en la cola de trabajo de una maquina en la ultima posicion
   */
  router
    .route("/maquinas/programarTareaCola")
    .post(maquinaRepository.programarTarea);

  /**
   * actualiza la posicion de una maquina en la interfaz
   */
  router
    .route("/maquinas/obtener/todosMoldes")
    .get(maquinaRepository.obtenerTodosMoldes);

  /**
   * obtiene cola de trabajo por id de maquina
   */
  router
    .route("/maquinas/colaTrabajo/verPorId")
    .get(maquinaRepository.verColaTrabajoPorId);

  /**
   * obtiene cola de trabajo por codigo de etiqueta de maquina
   */
  router
    .route("/maquinas/colaTrabajo/verPorCodigo")
    .get(maquinaRepository.verColaTrabajoPorCodigo);

  /**
   * registrar un historioco de un ciclo maquina
   */
  router
    .route("/maquinas/historicos/registrarHistorico")
    .post(maquinaRepository.registrarHistoricoCiclo);

  /**
   * crea un registro datos de una maquina
   */
  router
  .route("/maquinas/historicos/registrarDato")
  .post(maquinaRepository.registrarDato);


    /**
   * obtiene la tarea en ejecucion de una maquina desde su id
   */
     router
     .route("/maquinas/colaTrabajo/tareaEjecucionPorIdMaquina/:idMaquina")
     .get(maquinaRepository.obtenerTareaEjecucionPorIdMaquina);


    /**
   * obtiene la tarea en ejecucion de una maquina desde su id
   */
     router
     .route("/maquinas/colaTrabajo/tareaEjecucionPorIpAutomataPosicion/:ipAutomata/:posicion")
     .get(maquinaRepository.obtenerTareaEjecucionPorIpAutomataPosicion);

};
