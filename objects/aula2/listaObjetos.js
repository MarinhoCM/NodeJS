const cliente = {
    nome: 'marin',
    idade: 19,
    email:'marinemail.com',
    telefone: [
        '11 888898989', '11 888898888'
    ],
};
cliente.endereco = [{
    rua: 'yara rocha',
    numero: '1337',
    apartamento: true,
    complemento: 'ap 934'
}];
cliente.endereco.push({
    rua: 'Josep',
    numero: '1357',
    apartamento: false,//ao colocar true passa a fazer parte de listaComAptos
    complemento: '934'
});
const listaComAptos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaComAptos);
// console.log(cliente.endereco.rua);
