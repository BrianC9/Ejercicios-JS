const contenedor = document.getElementById("root");
const btnCargarDatos = document.getElementById("btnCargar")
btnCargarDatos.addEventListener("click", obtenerDatos)

function obtenerDatos() {
    const url = "https://fakestoreapi.com/products?limit=10"


    fetch(url)
        .then(respuesta => {
            console.log("estoy en la respuesta")
            console.log(respuesta.status)
            return respuesta.json()
        })
        .then(datos => {
            mostrarDatos(datos)
        })

}
function mostrarDatos(productos) {
    let html = "";
    productos.forEach(producto => {
        const { category, title, image, price, description } = producto
        html += `<div class="producto"><h2>${title}</h2><img src="${image}" width="120px"><span>${category}</span><p>${description}</p><span class="precio">${price} €</span></div>`
    });
    contenedor.innerHTML = html

}
