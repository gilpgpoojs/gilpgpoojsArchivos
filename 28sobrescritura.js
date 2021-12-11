class Despedida {
 despídete() {
  console.log("Adios")
 }
}

class DespedidaIngles
 extends Despedida {
 /** @override */
 despídete() {
  console.log("Bye")
 }
}

const despedidas = [
 new Despedida(),
 new DespedidaIngles()]
for (var d of despedidas) {
 d.despídete()
}