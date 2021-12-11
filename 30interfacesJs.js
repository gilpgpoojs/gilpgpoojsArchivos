class MensajeIng2 {
 saludo() {
  console.log("Hi")
 }
}

class MensajeEsp2 {
 saludo() {
  console.log("Hola")
 }
}

const mensajes = [
 new MensajeEsp2(),
 new MensajeIng2()]
for (var mens of mensajes) {
 mens.saludo()
}