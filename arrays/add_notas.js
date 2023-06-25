// um professor acidentalmente passou apenas 
// 3 das 4 notas no sistema de um aluno:
// - 10, 6, 8
// para corrigir adicione a nota 7 e refaça o cálculo 

const notas = [
    10, 6, 8
];

notas.push(7);
// push() semelhante ao append() em python

console.log(notas);

const media = (
    notas[0] + notas[1] + notas[2] + notas[3] 
) / notas.length;

console.log("a media do aluno foi: ", media);