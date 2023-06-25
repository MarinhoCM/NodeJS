const clientes = require('./cliente.json');

function ordenar(lista, propriedade, ordem = "crescente") {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
          return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
    
    if (ordem !== "crescente") {
        resultado.reverse();
    }
    
    return resultado;
}
const ordenadaPorNome = ordenar(clientes, 'nome', 'decrescente');
console.log(ordenadaPorNome);
