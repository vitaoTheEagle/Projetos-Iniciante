var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg", "https://s2.glbimg.com/fCNS_fXPhGRwlpnAaQLzvGYC1y0=/362x536/https://s2.glbimg.com/UPI9xlM9R9O41YRqSO7R3hTNk_s=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/q/V/Avo9ISQQO3grnARi3JCA/2020-914-a-chegada-poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg", "https://m.media-amazon.com/images/I/91FhSXlwgjL._AC_SL1500_.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {

    document.write("<img src=" + listaFilmes[i] + ">")
}

function Add() {
    var link = document.getElementById("link").value;
    
    body.innerHTML += "<img src=" + link + ">";

    console.log(link);
    console.log(listaFilmes);

}
