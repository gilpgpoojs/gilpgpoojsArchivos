const fx =
 () => console.log("hola")
const fy =
 (f) => console.log(f)
const fz = (a, b) => {
 console.log(a + b)
 return (a * b)
}
const fw = g => g + 1
fx()
console.log(fz(4, -15))
fy("mx")
console.log(fw(3))