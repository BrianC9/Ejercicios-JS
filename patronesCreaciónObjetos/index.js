// Patron factoría / factory
function creaActor(nombre, edad, actorMarvel) {
    let objeto = new Object();
    objeto.nombre = nombre;
    objeto.edad = edad;
    objeto.actorMarvel = actorMarvel;
    objeto.saludar = function () {
        console.log(`Hola, me llamo ${objeto.nombre}`)
    }

    return objeto;
}

let tomHolland = creaActor("Tom Holland", 23, true)
tomHolland.saludar();



// Patron constructor

function creaOtroActor(nombre, edad, actorMarvel) {
    this.nombre = nombre;
    this.edad = edad;
    this.actorMarvel = actorMarvel;
    this.saludar = function () {
        console.log(`Hola, me llamo ${this.nombre}`)

    }
}
//La función que creamos para el objeto no es más que un constructor

let henryCavill = new creaOtroActor("Henry Cavill", 32, false);
henryCavill.saludar()
// El problema que tiene el patrón constructor es que se sirve del contexto, par utilizar la palabra this
// Si a la hora de instaciar un nuevo objeto, olvidásemos la palabra new, el this apuntaría al objeto window ya que sin la plabara new, se entiende que no hemos instanciado ningún obejto