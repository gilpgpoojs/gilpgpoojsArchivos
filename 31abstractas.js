class Deportista {
 constructor(nombre) {
  this.nombre = nombre
 }
 presenta() {
  console.log(`Soy ${this.nombre}`)
 }
 /** @abstract */
 anota() {
  throw new Error("abstract")
 }
}

class Basketbolista
 extends Deportista {
 constructor(nombre) {
  super(nombre)
 }
 /** @override */
 anota() {
  console.log("Encesto")
 }
}

class Futbolista
 extends Deportista {
 constructor(nombre) {
  super(nombre)
 }
 /** @override */
 anota() {
  console.log("Anoto gol")
 }
}

const deportistas = [
 new Basketbolista("LeBron"),
 new Futbolista("Lionel")]
for (var dep of deportistas) {
 dep.presenta()
 dep.anota()
}