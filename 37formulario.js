<script>
 debugger
 try {
  const a = leeA()
  const b = leeB()
  /* Debe cumplirse que a sea un
   * número. */
  if (isNaN(a)) throw new Error(
   "El valor de a debe ser un " +
   "número.")
  /* Debe cumplirse que a sea un
   * número. */
  if (isNaN(b)) throw new Error(
   "El valor de b debe ser un " +
   "número.")
  /* Debe cumplirse que b sea
   * diferente de 0. */
  if (b === 0) throw new Error(
   "El valor de b no puede ser 0.")
  const resultado = procesa(a, b)
  document.write(
   "El resultado es: ", resultado,
   "<br>")
 } catch (e) {
  document.write(e.message, "<br>")
 }

 function leeA() {
  const strA = prompt(
   "Introduce el valor de a: ")
  const a = parseFloat(strA)
  return a
 }

 function leeB() {
  const strB = prompt(
   "Introduce el valor de b: ")
  const b = parseFloat(strB)
  return b
 }

 /** Calcula el resultado
  * @param {number} a el dividendo.
  * @param {number} b el divisor.
  */
 function procesa(a, b) {
  return a / b
 }
</script>