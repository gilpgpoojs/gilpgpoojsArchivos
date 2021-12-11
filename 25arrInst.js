class Clao {
 constructor(a) {
  this.a = a
 }
}
const arrI = [
 new Clao(-3),
 new Clao(4),
 new Clao(8)]
console.log(arrI)
for (const ref of arrI) {
 console.log(ref.a)
}