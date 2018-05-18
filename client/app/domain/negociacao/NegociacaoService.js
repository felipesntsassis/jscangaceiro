class NegociacaoService {
    obterNegociacoesDaSemana(cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            // 1- Conexão estabelecida, 2 - Requisição recebida, 3 - Processando requisição e 4 - requisição concluída
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    const negociacoes = JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                    cb(null, negociacoes);
                }
            } else {
                console.log(xhr.responseText);
                cb('Não foi possível obter as negociações da semana', null);
            }
        };
        xhr.send();
    }
}