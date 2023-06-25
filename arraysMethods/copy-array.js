//maneira errada
// const notas = [7, 7, 8, 9];
// const novasnotas = notas;
// novasnotas.push(10);
// console.log(`AS NOVAS NOTAS SÃO: ${novasnotas}`);
// console.log(`AS NOTAS ORIGINAIS SÃO: ${notas}`);

//maneira correta com operador de espalhamento
const notas = [7, 7, 8, 9];
const novasnotas = [...notas];
novasnotas.push(10);//ou
// const novasnotas = [...notas, 10]; //ja insere o 10 no fim do array;
console.log(`AS NOVAS NOTAS SÃO: ${novasnotas}`);
console.log(`AS NOTAS ORIGINAIS SÃO: ${notas}`);

