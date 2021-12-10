// Crea un objeto usando {}.
// Controla con la referencia tel.
let tel = {}
// Le pone propiedades.
tel.nombre = "pp"
tel.color = "marrón"
// Le pone un método.
tel.saluda =
 () => console.log("Hola.")
tel.saluda()
console.log(tel)
console.log(tel.nombre)
console.log(tel.color)
tel = null // Cuelga.
console.log(tel)