function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var listaFilmes = [adicionar];
    var adicionar = listaFilmes.push("filmeFavorito");
console.log(listaFilmes.length);
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
        
    } else {
        console.error("Endereço de Filme Inválido");
    }
    
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;

}

