let nombre = "pp";
saluda() // invoca a saluda.
/* Al terminar la primera
 * invocación continúa aquí. */
nombre = "qk"
saluda() // invoca a saluda.
/* Al terminar la segunda
 * invocación continúa aquí. */
console.log("adios")

/**
 * Definición de la función saluda.
 */
function saluda() {
 console.log(nombre)
}