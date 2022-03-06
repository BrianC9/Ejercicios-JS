window.onload = iniciar
function creaFicha(nsFicha, videoFicha, tituloFicha, duracionVideo, fechaFicha) {
    this.ns = parseInt(nsFicha);
    this.claseFicha = 'fichaPelicula';
    this.url = videoFicha;
    this.titulo = tituloFicha;
    this.duracion = duracionVideo
    this.fecha = fechaFicha
    this.vistas = (function () {
        var contador = 0;
        return function () { contador += 1; return contador }
    })();


    this.getUrl = function () { return this.url };
    this.setNumFicha = function (url) { this.url = url }
    this.html = function () {
        let resultado
        let img = '<img src=' + this.url + ' alt="foto de ' + this.titulo + '" width = "100px"><br>'
        let txt = this.ns + "<br>" + this.titulo + "<br>" + this.fecha + "<br>" + this.duracion + "<br>" + "<div class='contadorVistas'>" + this.vistas() + "</div>"

        resultado = "<div class='divFichaPelicula'>" + img + txt + "</div>"
        return resultado
    }
}
const nuevoObjeto = new creaFicha(123, "https://c8.alamy.com/compes/dt731x/poster-de-pelicula-pulp-fiction-1994-dt731x.jpg", "Pulp Fiction", 123, new Date(2022, 2, 10).toLocaleDateString("es"), "AB12")
const segundaFicha = new creaFicha(321, "https://www.ecartelera.com/carteles/3100/3148/001_p.jpg", "Shutter Island", 321, new Date(2010, 2, 19).toLocaleDateString("es"), "CD34")
let colecionObjetosFicha = [nuevoObjeto, segundaFicha]

function iniciar() {

    let divContenedor = document.createElement('div')
    document.body.appendChild(divContenedor);
    for (let index = 0; index < colecionObjetosFicha.length; index++) {
        divContenedor.innerHTML += colecionObjetosFicha[index].html();
    }
    let divFichas = document.querySelectorAll(".divFichaPelicula")
    divFichas.forEach((el) => {
        el.style.textAlign = "center"
    })






}
