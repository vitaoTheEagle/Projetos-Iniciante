var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];

listaFilmes.push("Harry Potter");
listaFilmes.push("Interestelar");

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

// (valor inicial; condição; expressão final)

for (var indice = 0; indice < listaFilmes.length; indice = indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");
}