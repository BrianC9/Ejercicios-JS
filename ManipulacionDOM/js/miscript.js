// Seleccionamos las imágenes disponibles
let imagenesLogos=document.querySelectorAll("#images img");


// Añadimos el evento para cada imagen

imagenesLogos.forEach(logo =>{
    logo.addEventListener("click",cambiaImagenCentral)

})

function cambiaImagenCentral(){
    let imagenCentral = document.querySelector("#frame img");
    imagenCentral.setAttribute("src",event.target.getAttribute("src"));
}


// Seleccionamos los colores donde queremos que se lanze el evento
 

let colores = document.querySelectorAll(".colors div")

colores.forEach(color =>{
    color.addEventListener("click",cambiaBorde)
})


function cambiaBorde(){
    let colorSeleccionado=window.getComputedStyle(event.target).backgroundColor;
    let bordeImagenCentral = document.getElementById("picture")
    bordeImagenCentral.style.border="10px solid "+colorSeleccionado;
}

// Seleccionamos el zoom in/ out
let zoomIn=document.querySelector("#zoom img:nth-child(1)");
zoomIn.addEventListener("click", acercar);

function acercar(){
    let imagenCentral = document.querySelector("#frame img");
    let dimensiones=imagenCentral.offsetWidth;
    imagenCentral.style.width=(dimensiones+30)+"px";
    imagenCentral.style.height=(dimensiones+30)+"px";

}
let zoomOut=document.querySelector("#zoom img:nth-child(2)");
zoomOut.addEventListener("click", alejar);

function alejar(){
    let imagenCentral= document.querySelector("#frame img");
    let dimensiones=imagenCentral.offsetWidth;
    imagenCentral.style.width=(dimensiones-30)+"px";
    imagenCentral.style.height=(dimensiones-30)+"px";
}