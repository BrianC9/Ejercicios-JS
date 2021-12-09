// Coloreamos las celdas de la cabecera en verde 
let celdasCabecera=document.querySelectorAll("thead th")
celdasCabecera.forEach(th => {
    th.style.backgroundColor="green";
});

// Seleccionamos las celdas del cuerpo de la tabla
let celdasCuerpo=document.querySelectorAll("tbody td")

// Funcion efecto hover
function entrar(){
    this.parentElement.style.backgroundColor="red";
    this.parentElement.style.height="4rem";
    let indiceColumna=Array.from(this.parentElement.children).indexOf(this);
    
    // Modifico las celdas de las columnas
    //Por filas
    let filaAnterior=this.parentElement.previousElementSibling;
    while(filaAnterior){
        let celdaColumna=filaAnterior.children[indiceColumna];
        celdaColumna.style.backgroundColor="red";
        filaAnterior=filaAnterior.previousElementSibling;
    }

    let filaSiguiente=this.parentElement.nextElementSibling;
    while (filaSiguiente) {
        let celdaColumna=filaSiguiente.children[indiceColumna];
        celdaColumna.style.backgroundColor="red";
        filaSiguiente=filaSiguiente.nextElementSibling;

    }
    

        celdasCabecera[indiceColumna].style.backgroundColor="greenyellow";


    
    
}
function salir(){
    this.parentElement.style.backgroundColor="inherit";
    this.parentElement.style.height="inherit";
    let indiceColumna=Array.from(this.parentElement.children).indexOf(this);

    // Modifico las celdas de las columnas
    //Por filas
    let filaAnterior=this.parentElement.previousElementSibling;
    while(filaAnterior){
        let celdaColumna=filaAnterior.children[indiceColumna];
        celdaColumna.style.backgroundColor="inherit";
        filaAnterior=filaAnterior.previousElementSibling;
    }

    let filaSiguiente=this.parentElement.nextElementSibling;
    while (filaSiguiente) {
        let celdaColumna=filaSiguiente.children[indiceColumna];
        celdaColumna.style.backgroundColor="inherit";
        filaSiguiente=filaSiguiente.nextElementSibling;

    }
    
    celdasCabecera[indiceColumna].style.backgroundColor="green";

}

celdasCuerpo.forEach(td => {
    td.addEventListener("mouseenter", entrar);
    td.addEventListener("mouseleave",salir)
});
// document.querySelector("tbody td").parentElement.parentElement.parentElement.children[1].children[0].children[1]