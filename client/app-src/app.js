import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'bootstrap/dist/js/bootstrap.js';

import '../css/meucss.css';

import { NegociacaoController } from './controller/NegociacaoController.js';
import { Negociacao } from './domain/index.js';

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

fetch(`${SERVICE_URL}/negociacoes`, config).then(() => console.log('Dado enviado com sucesso'));