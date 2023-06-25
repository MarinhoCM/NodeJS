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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
};
// ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
ligaParaCliente(...cliente.telefone)

// const encomenda = {
//     destinatario : cliente.nome,
//     endereco: cliente.endereco[0],
//     rua: cliente.endereco[0].rua,
//     numero: cliente.endereco[0].numero
// }
const encomenda = {
    destinatario : cliente.nome,
    ...cliente.endereco[0],
};
console.log(encomenda);