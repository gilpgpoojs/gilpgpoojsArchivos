class ClM2 {
 muestra() {
  console.log("Hola.")
 }
}
class ClH2 extends ClM2 {
 /** @override */
 muestra() {
  super.muestra()
  console.log("Consola.")
 }
}
const tm2 = new ClM2()
tm2.muestra()
const th2 = new ClH2()
th2.muestra()