window.onload = iniciar
let divContenedor;
let btnOrdenaFecha;
let btnOrdenaNombre;
let btnInicio;
function iniciar() {
    const btnCargar = document.getElementById("btnCargar");
    btnCargar.addEventListener("click", cargarPelis)
    divContenedor = document.getElementById("contenedor");
    btnOrdenaFecha = document.getElementById("btnOrdenaFecha")
    btnOrdenaFecha.addEventListener("click", renderizaOrdenFecha)
    btnOrdenaNombre = document.getElementById("btnOrdenaNombre")
    btnOrdenaNombre.addEventListener("click", renderizaOrdenTitulo)
    btnInicio = document.getElementById("btnInicio")
    btnInicio.addEventListener("click", () => document.location.href = "index.html")
}
async function cargarUrl(url) {

    let response = await fetch(url);
    return response.json();
}
const coleccionObjetos = [];


async function cargarPelis() {
    let valor = document.getElementById("input").value;

    let datosJson = await cargarUrl(`https://www.omdbapi.com/?s=${valor}&apikey=aa1a087a`);
    console.log(valor)
    let listaPelis = datosJson.Search
    for (let i = 0; i < listaPelis.length; i++) {
        coleccionObjetos.push(listaPelis[i])
    }
    renderizarPelis()
    btnOrdenaFecha.style.display = "inline-block"
    btnOrdenaNombre.style.display = "inline-block"
    btnInicio.style.display = "inline-block"
    console.log(coleccionObjetos)
    document.body.removeChild(document.getElementById("formu"))

}
function renderizarPelis() {
    for (let i = 0; i < coleccionObjetos.length; i++) {

        let ficha = creaFicha(coleccionObjetos[i].Title, coleccionObjetos[i].imdbID, coleccionObjetos[i].Poster, coleccionObjetos[i].Year, coleccionObjetos[i].Type);
        divContenedor.appendChild(ficha)
        console.log(coleccionObjetos[i])
    }
}

function renderizaOrdenTitulo() {
    divContenedor.innerHTML = "";
    ordenerPorTitulo(coleccionObjetos);
    renderizarPelis()

}
function renderizaOrdenFecha() {
    divContenedor.innerHTML = "";
    ordenerPorFecha(coleccionObjetos)
    renderizarPelis()
}
function creaFicha(titulo, id, poster, anio, type) {
    let ficha = document.createElement('div')
    let imagenRespaldo = " https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg"
    ficha.className = "fichaPeli"

    ficha.innerHTML = `    <img src="${poster == 'N/A' ? imagenRespaldo : poster}" alt="poster de  ${titulo}"  ><br><span class ='titulo'>
    ${titulo}</span>${id}<br>${type === 'movie' ? "Pelicula" : type === 'series' ? 'serie' : type}<br>${anio}`
    ficha.style.textAlign = "center"
    return ficha;

}
function compare(a, b) {
    if (a.Title < b.Title) {
        return -1;
    }
    if (a.Title > b.Title) {
        return 1;
    }
    return 0;
}
function ordenerPorTitulo(array) {
    array.sort(compare)

}
function ordenerPorFecha(array) {
    array.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
}


