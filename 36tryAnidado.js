try {
 console.log("Empezamos")
 fallo()
 console.log("No me ignores")
} catch (e) {
 console.log(e)
}
console.log("Terminamos")
function fallo() {
 console.log("¿Fallaremos?")
 throw new Error("Fallamos")
 console.log("Tampoco me ignores")
}