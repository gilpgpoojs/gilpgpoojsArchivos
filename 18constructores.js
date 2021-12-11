class ClM1 {
 constructor(p) {
  console.log(p)
  this.m = p
 }
}
class ClH1 extends ClM1 {
 constructor(b, c) {
  super(b)
  console.log(c)
  this.h = c
 }
}
const th1 = new ClH1(4, -2)
console.log(th1.m)
console.log(th1.h)
const tm1 = new ClM1(8)
console.log(tm1.m)