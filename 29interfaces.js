/** @interface */
class IntfMensaje {
 saludo() {
  throw new Error("interface")
 }
}

/** @implements {IntfMensaje} */
class MensajeIng {
 saludo() {
  console.log("Hi")
 }
}

/** @implements {IntfMensaje} */
class MensajeEsp {
 saludo() {
  console.log("Hola")
 }
}

const imensajes = [
 new MensajeEsp(),
 new MensajeIng()]
for (var mens of imensajes) {
 mens.saludo()
}