//Foram fornecidas duas listas para nós. A primeira contém
// os nomes de quatro estudantes e a segunda possui suas
//respectivas médias:

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`lista: ${listaDeAlunosEMedias}`);//template string altera o retorno
console.log(listaDeAlunosEMedias);
console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
    `
);