const todoContainer = document.querySelector(".todo .tasks");
const inProcessContainer = document.querySelector(".inprocess");
const doneContainer = document.querySelector(".done");
const btnAdd = document.querySelector(".add a");


// Creamos las tareas
function addTarea(inputTextoTarea) {
    let divNuevaTarea = document.createElement("div");
    let tituloTarea = document.createElement("p");
    let cerrar = document.createElement("p");

    let textoTarea = document.createTextNode(inputTextoTarea);
    let x = document.createTextNode("X");

    tituloTarea.append(textoTarea);
    cerrar.append(x);
    cerrar.style.cursor="pointer";
    
    divNuevaTarea.classList.add("task");
    divNuevaTarea.append(tituloTarea);
    divNuevaTarea.append(cerrar);
    divNuevaTarea.draggable=true;


    //El evento para borrar la tarea
    cerrar.addEventListener("click", borrarTarea);
    divNuevaTarea.addEventListener("dragstart", event => {
        event.dataTransfer.setData("name",event.target.children[0].textContent);
        event.target.setAttribute("id","draggable");
    });
    return divNuevaTarea;

}
// Las colocamos en el tablero
btnAdd.addEventListener("click", colocaTarea);
function colocaTarea() {
    let textoInput = document.querySelector(".add input");

    if (textoInput.value) {
        todoContainer.append(addTarea(textoInput.value));
        textoInput.value = "";

    } else {
        window.alert("Introduce un valor");
    }
}

// Botón para borrar tareas


// Proceso para borrar los elementos existentes 

let btnBorrarTarea = document.querySelectorAll(".close");
btnBorrarTarea.forEach(btn => {
    btn.style.cursor="pointer";
    btn.addEventListener("click", borrarTarea);
    
});
// Función general que borra elementos padre
function borrarTarea() {
    this.parentElement.remove();
}

// Hacer las tareas draggable

let tareasLista = document.querySelectorAll(".task");
tareasLista.forEach(tarea => {
    tarea.draggable = true;
    tarea.addEventListener("dragstart", event => {
        event.dataTransfer.setData("name", event.target.children[0].textContent);
        event.target.setAttribute("id", "draggable");
        //console.log(transferirInfo.target.children[0].textContent)
    });
});

// Evento para poder soltar las tareas en otras cajas
let tareasContainer = document.querySelectorAll(".tasks");

tareasContainer.forEach(container => {
    container.addEventListener("dragover", function (event) {
        event.preventDefault();
        
    });
    container.addEventListener("drop", function (event) {
        event.preventDefault();
        let name = event.dataTransfer.getData("name");
        event.target.closest(".tasks").append(addTarea(name));
        document.getElementById("draggable").remove();
        console.log(event.target.children[0].textContent)


    });





});




