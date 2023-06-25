//utilizando a classe Set()
const nomes = [
    "Ana", "Clara", "Maria",
    "Maria", "João", "João",
    "João"
];
// const meuSet = new Set(nomes);
// const newNames = [...meuSet] // copiando o retorno do Set()
// console.log(newNames);

// outra forma
const newNames = [...new Set(nomes)];
console.log(newNames);
