// Um professor acidentalmente lançou 
// 5 notas no sistema para um aluno:
// - 10, 6, 8 , 5.5 e 10
// para corrigir, remova a ultima nota e faça 
//o calculo da média correta.

const notas = [10, 6, 8 , 5.5, 10];
notas.pop();
const media = (
    notas[0] + notas[1] + notas[2] + notas[3]
) / notas.length;

// assim como no python a função pop 
// remove o ultimo elemento de um array/lista
console.log(`A media foi: ${media}`);
// template strings no javascript funciona por meio de : `` juntamente 
// ao $ para inserir a variável
  

// concat():
// Junta dois arrays, colocando o array passado como argumento
// , logo depois do primeiro. Em português essa operação é conhecida
// como concatenação. Não altera o array no qual foi chamado, então
// precisamos salvar esse resultado em um novo array.