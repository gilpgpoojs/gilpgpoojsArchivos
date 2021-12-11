class ClX {
 constructor() {
  /** @private */
  this._nombre = ""
 }
 get nombre() {
  return (this._nombre)
 }
 set nombre(nombre) {
  this._nombre = nombre
 }
 /** @public */
 get juega() {
  return (`${this.nombre} juega`)
 }
}
const tt1 = new ClX()
tt1.nombre = "pp"
console.log(tt1.nombre)
console.log(tt1.juega)