const x = fna(8, 5)
console.log(fna(4, 1))
console.log(x)
/**
 * @param {number} t
 * @param {number} bc
 */
function fna(t, bc) {
 console.log(t + bc * 2)
 return (1 + t * 8);
 
}