const notas = [10, 6.5, 8, 7.5];
let somadasnotas = 0;
notas.forEach(function (nota, index){
    somadasnotas += nota;
    //console.log(index);
});
const media = somadasnotas / notas.length
console.log(`A media dessas notas é: ${media}.`)

