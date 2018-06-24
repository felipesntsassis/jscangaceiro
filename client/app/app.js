System.register(['./controller/NegociacaoController.js', './domain/index.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController, Negociacao;
    return {
        setters: [function (_controllerNegociacaoControllerJs) {
            NegociacaoController = _controllerNegociacaoControllerJs.NegociacaoController;
        }, function (_domainIndexJs) {
            Negociacao = _domainIndexJs.Negociacao;
        }],
        execute: function () {

            // Controllers
            const controller = new NegociacaoController();
            const negociacao = new Negociacao(new Date(), 1, 200);
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const body = JSON.stringify(negociacao);
            const method = 'POST';
            const config = {
                method,
                headers,
                body
            };
            console.log(config);

            fetch('/negociacoes', config).then(() => console.log('Dado enviado com sucesso'));

            // Eventos
            // $('.form').addEventListener('submit', controller.adiciona.bind(controller));
            // $('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));
            // $('#botao-importa').addEventListener('click', controller.importaNegociacoes.bind(controller));
        }
    };
});
//# sourceMappingURL=app.js.map