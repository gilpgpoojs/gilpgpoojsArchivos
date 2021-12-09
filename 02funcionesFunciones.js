function c1() {
 document.write("c1-1")
 c2()
 document.write("c1-2")
}
function c2() {
 document.write("c2")
}
document.write("global-1")
c2()
document.write("global-2")
c1()
document.write("global-3")