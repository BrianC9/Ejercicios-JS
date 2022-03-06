function divConFecha(fecha) {
    this.anchura = aleatorio(80, 150) + "px";
    this.altura = aleatorio(20, 100) + "px";
    this.fechaDiv = new Date(fecha);
    this.border = "1px solid gray";
    this.bgColor = getRandomColor();
    this.html = () => {
        let txtHtml = `<div class = "divFecha" style="width:${this.anchura};height:${this.altura};border:${this.border};background:${this.bgColor};text-align:center;display:flex;justify-content:center">${this.fechaDiv.toLocaleDateString('es')} </div>`
        return txtHtml
    }
}
let divContenedor = document.createElement('div')
document.body.appendChild(divContenedor)
let coleccionFechas = [];
let coleccionObjetos = []


for (let i = 0; i < 5; i++) {
    coleccionFechas.push(fechaAleatoria(new Date(1997, 4, 23), new Date(1999, 2, 2)));
    let objetoNuevo = new divConFecha(coleccionFechas[i]);
    coleccionObjetos.push(objetoNuevo)
}
for (let i = 0; i < coleccionObjetos.length; i++) {

    let fichaCreada = creaEle();
    divContenedor.appendChild(fichaCreada)
    fichaCreada.innerHTML += coleccionObjetos[i].html();


}
let coleccionOrdenada = coleccionFechas.sort((a, b) => {
    return a.getTime() - b.getTime();
})
let coleccionFichas = document.querySelectorAll(".divFecha")
coleccionFichas.forEach((elemento, index) => {


    elemento.style.float = "left"

})
function creaEle() {
    let ele = document.createElement('div')
    return ele;
}
function getRandomColor() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
function fechaAleatoria(fechaInicial, fechaLimite) {
    return new Date(
        fechaInicial.getTime() +
        Math.random() * (fechaLimite.getTime() - fechaInicial.getTime())
    );
}
function aleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
}