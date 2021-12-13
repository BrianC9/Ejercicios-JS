
let btn = document.querySelector("#build");
btn.addEventListener("click", generaTabla)
function generaTabla() {
    //Comprobamos si existe o no una tabla ya en el DOM
    if(document.querySelector("table")){
        document.querySelector("table").remove();
    }
    // Creamos el elemento tabla html
    let tabla = document.createElement("table");
    document.querySelector("p:nth-child(2)").append(tabla);

    let filas = document.querySelector("p:nth-child(1").children[1].value;
    let columnas = document.querySelector("p:nth-child(1").children[3].value;
    for (let i = 0; i < filas; i++) {
        let tr = document.createElement("tr");
        tabla.append(tr)
        for (let j = 0; j < columnas; j++) {
            let td = document.createElement("td");
            td.innerHTML = `${i},${j}`
            tr.append(td);
        }
    }
    console.log(filas, columnas);
}