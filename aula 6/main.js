var rafa = {nome:"Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 2};
var paulo = {nome:"Paulo", vitorias: 1, empates: 1, derrotas: 1, pontos: 1};

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + (jogador.empates);
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);


var jogadores = [rafa, paulo,];

function exibeJogadoresNaTela(jogadores) {
    var elemento = ""
    for(var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[1].nome +"</td>";
        elemento +=  "<td>" + jogadores[i].vitorias + "</td>";
        elemento +=  "<td>" + jogadores[i].empates + "</td>";
        elemento +=  "<td>" + jogadores[i].derrotas + "</td>";
        elemento +=  "<td>" + jogadores[i].pontos + "</td>";
        elemento +=  "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento +=  "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento +=  "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
        elemento +=  "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}