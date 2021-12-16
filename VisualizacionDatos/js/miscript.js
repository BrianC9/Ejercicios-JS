const btnRepresentar = document.getElementById("representar");
btnRepresentar.addEventListener("click", representarGrafico);

function representarGrafico() {
    let filas = document.querySelectorAll("tbody tr");
    for (let i = 0; i < filas.length; i++) {

        let celdasDatos = filas[i].children;
        let graficos = document.querySelector(`.graphics > div:nth-child(${i + 1})`)

        for (let j = 1; j < filas.length; j++) {
            let
                valorCelda = parseInt(celdasDatos[j].textContent);

            
            let barra = graficos.children[j - 1];
            barra.style.height = `${valorCelda}px`;
            barra.title=`Precipitaciones: ${valorCelda} l/m2 `


        }


    }




}