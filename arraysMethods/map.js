// um aluno recebeu um ponto extra nas suas notas.
// Adicione esse ponto nas notas da seguinte lista:
// 10, 9.5, 8, 7, 6
const notas = [
    10, 9.5, 8, 7, 6
]
const novasNotas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10: nota + 1;//operador ternário(if em uma linha)
});
console.log(notas);// map n altera o array original;
console.log(novasNotas);
