const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
};

// Para adicionar as novas propriedades precisamos somente
// informar o novo campo e o seu valor, ou seja,
//pessoa.cpf="15346626522-65" e pessoa.seguroSocial="854321985-9".
// Para exibir os 4 primeiros dígitos da identidade e CPF, podemos
// chamar uma função de string chamada substring() e passar início e
// o fim da string que queremos como pessoa.cpf.substring(0,4).

pessoa.cpf = "15346626522-65";
pessoa.seguroSocial="854321985-9";
console.log(pessoa);
// return
// {
//     nome: 'Bruce Banner',
//     dataNascimento: '25/01/1980',
//     carteiraIdentidade: '997776-X',
//     email: 'profbanner@email.com',
//     telefone: '+552877776666',
//     cidade: 'Cachoeiro de Itapemirim',
//     estado: 'ES',
//     cpf: '15346626522-65',
//     seguroSocial: '854321985-9'
// }
  