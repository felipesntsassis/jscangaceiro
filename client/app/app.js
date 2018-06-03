System.register(['./controller/NegociacaoController.js'], function (_export, _context) {
  "use strict";

  var NegociacaoController;
  return {
    setters: [function (_controllerNegociacaoControllerJs) {
      NegociacaoController = _controllerNegociacaoControllerJs.NegociacaoController;
    }],
    execute: function () {

      // Controllers
      const controller = new NegociacaoController();
      const $ = document.querySelector.bind(document);

      $('.form').addEventListener('submit', controller.adiciona.bind(controller));
      $('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));
      $('#botao-importa').addEventListener('click', controller.importaNegociacoes.bind(controller));
    }
  };
});
//# sourceMappingURL=app.js.map