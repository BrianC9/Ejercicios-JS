function compruebaNombre(nombre) {
    return new Promise((resolucion, rechazo) => {
        if (nombre === "Bryan") {
            setTimeout(() => {
                resolucion("Acceso garantizado, te llamas Bryan!");

            }, 4000)
        } else {
            rechazo("Un momento tu no eres el admin")
        }
    });
}

let nombre = "Javi"
compruebaNombre(nombre)
    .then(respuesta => console.log(respuesta)) // Esto esperará 4 segundos, en caso de que el nombre sea Bryan
    .catch(error => console.log(error)) // Se ejecuta sin esperar 
    .then(console.log("No espero a niguna función")) // Se ejecuta primero, ya que no tiene que realizar ningún proceso