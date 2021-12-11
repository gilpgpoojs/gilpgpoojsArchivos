let tel1 = {
 saludo:
  /** @param {any} nombre */
  nombre => `Hola ${nombre}.`,
 nombre: "pp"
}
console.log(tel1)
let tel2 = tel1
let goles = 3, seg = 8
tel1 = {
 goles,
 despídete:
  () => console.log("Bye"),
 seguidores: seg
}
goles++
seg++
console.log(tel2.nombre)
tel1.despídete()