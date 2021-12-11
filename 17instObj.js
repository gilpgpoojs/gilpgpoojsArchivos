class Cl2 {
 static saludaClase() {
  console.log(
   `Hola. Clase ${Cl2.nombre}.`)
 }
 saludaInstancia() {
  console.log(
   `Hola. Instancia ${this.nom}`)
 }
}
Cl2.nombre = "QK"
const t1 = new Cl2()
t1.nom = "qkita1"
const t2 = new Cl2()
t2.nom = "qkita2"
Cl2.saludaClase()
t1.saludaInstancia()
t2.saludaInstancia()