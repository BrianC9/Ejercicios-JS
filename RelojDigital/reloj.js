// // Creamos una funncion que se ejecute cada segundo, para que vaya cambiando el reloj
setInterval(() => {
    let reloj = document.getElementsByClassName("reloj")[0];
    let fechaActual = new Date();
    let hora = fechaActual.getHours();
    if (hora < 10) {
        hora = `0${hora}`;
    }
    let minutos = fechaActual.getMinutes();
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }
    let segundos = fechaActual.getSeconds();
    if (segundos < 10) {
        segundos = `0${segundos}`;
    }

    reloj.innerHTML = `${hora} : ${minutos} : ${segundos}`;
}, 1000);
