try {
 console.log("Sin error")
} finally {
 document.
  write("Si se ejecuta")
}
console.
 log("Continuamos, no hay falla")
try {
 throw new Error("A volar")
 console.log("No se ejecuta.")
} finally {
 console.log(
  "Se ejecuta, pero hay error")
}
console.log("Esto no se realiza")