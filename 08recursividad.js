/**
 * @param {number} a
 * @param {number} b
 */
function fns(a, b) {
 if (a <= 0) {
  console.log("Devuelve", b)
  return (b)
 } else {
  console.
   log("Invoca:", a - 1, ", ", b)
  const ant = fns(a - 1, b)
  console.log("Devuelve:", ant + 1)
  return (ant + 1)
 }
}
console.log("Invoca: 2, 3")
console.log(fns(2, 3))