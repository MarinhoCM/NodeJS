//Desafio 8: Procurando na lista
//Crie uma função que recebe como argumento o nome de um aluno.
//Verifique se o aluno está presente na lista e retorne a média
// final que se encontra no mesmo índice.
//Caso o nome do aluno não esteja na lista, retorne uma mensagem
// indicando que o aluno não foi encontrado.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado`);
        const index = listaDeAlunosEMedias[0].indexOf(aluno)
        console.log(`O ${aluno} é o ${index + 1}º da lista`);
        const mediaAluno = listaDeAlunosEMedias[1][index]
        console.log(`A média de ${aluno} é ${mediaAluno}`);
    } else {
        console.log(`Aluno não encontrado!`);
    }
}

exibeNomeENota('João');

//o método includes() confere se o elemento 
//passado por parâmetro está incluso em uma lista;

//o método indexOf() retorna o índice do elemento 
//passado por parâmetro;

// refatorando 
// ...
// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];
// const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){
//     if (listaDeAlunosEMedias[0].includes(aluno)) {
//         const [alunos, medias] = listaDeAlunosEMedias;

//         const indice = alunos.indexOf(aluno);

//         const mediaDoAluno = medias[indice];

//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);

//     } else {
//         console.log("Aluno não encontrado!");
//     }
// }

// exibeNomeENota("Ana");
