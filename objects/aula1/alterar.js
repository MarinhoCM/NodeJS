//alterando objetos
const pessoa = {
    nome: 'marin',
    profissao: 'QA',
};
console.log(pessoa.nome);
console.log(pessoa.telefone);//undefined;

pessoa.telefone = '11 222223333444';
console.log(pessoa.telefone);

pessoa.nome = 'marin de sousa';
console.log(pessoa);