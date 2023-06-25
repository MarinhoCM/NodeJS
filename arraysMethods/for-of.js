const notas = [10, 6.5, 8, 7.5];

let somadasnotas = 0
for(let nota of notas){
    somadasnotas += nota;
};
console.log(somadasnotas);

const nomes = [
    'marin', 'caua', 'sousa', 'vieira', 'felix'
]
let index = 0
for (let elemento of nomes){
    index++
    console.log(
        `elemento: ${elemento} de indice: ${index}`
    );
}

const numeros = [100, 200, 300, 400, 500, 600];
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

const numerosPares = [];
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
console.log(numerosPares);